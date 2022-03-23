import React, {useState, useEffect} from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import Warning from "./components/Warning";
import WeatherAndForecast from "./components/WeatherAndForecast";

import getCoordinatesOfAddress from "./api/forwardGeocoding";
import getWeatherAndForecast from "./api/weatherAndForecast";

import "./styles/App.css";

function App() {

  // задаем изначальные состояния для будущих данных
  const [address, setAddress] = useState("");
  const [coordinates, setCoordinates] = useState({});
  const [weatherAndForecastInfo, setWeatherAndForecastInfo] = useState({});
  const [locationInfo, setLocationInfo] = useState({});
  const [contentState, setContentState] = useState("none");

  // сохраняем данные из ввода
  function searchCity(target) {
    setAddress(target);
  }

  // предупреждение об ошибке
  function showWarning() {
    setContentState("warning");
    setTimeout(() => setContentState("none"), 5000);
  }
  
// задаем адрес 
    useEffect(() => {
      if (address === "")
        return;
      setContentState("loading");   // экран загрузки во время получения данных

      // получаем адрес для работы 
      getCoordinatesOfAddress(address).then((res) => {
        if (res.data.length === 0 || 
          (res.data.results[0].components.city === undefined &&
          res.data.results[0].components.town === undefined)) {
          showWarning(); // если ничего не было введено или ничего не найдено -> ошибка
          return;
        }
        // задаем координаты в стейт
        setCoordinates(res.data.results[0].geometry);
        // задаем инфо о городе
        setLocationInfo({
          city: res.data.results[0].components.city,
          town: res.data.results[0].components.town,
          state: res.data.results[0].components.state_code,
          country: res.data.results[0].components.country_code
        });
      }).catch((error) => showWarning());
    }, [address]);

// задаем координаты
    useEffect(() => {
        if (Object.keys(coordinates).length === 0) 
            return;
        // получаем координаты для работы 
        getWeatherAndForecast(coordinates).then((res) => {
            setWeatherAndForecastInfo(res.data);
            setContentState("weatherAndForecast");
        }).catch((error) => showWarning());
    }, [coordinates]);

    
// создаем js обьект с состояниями для загрузки, ошибки, и отображения инфо
    const Main = {
        none: () => null,
        loading: () => <Loader/>,
        warning: () => <Warning/>,
        weatherAndForecast: () => (
        <WeatherAndForecast
            weatherInfo={weatherAndForecastInfo}
            location={locationInfo}/>)
    };

    return (
        <div className="App">
            <div className="App__container">
                <> 
                <Header searchCity={searchCity}/> 
                {Main[contentState]()}
            </>
            <Footer/>
        </div>
    </div>
    );
}

export default App;
