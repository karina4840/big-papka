import React from "react";
import "../styles/Forecast.css";

function Forecast({ weatherInfo, date }) {
  return (
    <div>
      {/* первые три буквы от для недели */}
      <h1 className="Forecast__title">{[date[0], date[1], date[2]]}</h1> 
      {/* картинка из апи */}
      <img
        className="Forecast__weather-icon"
        src={"https://openweathermap.org/img/wn/" +
          weatherInfo.weather[0].icon +
          ".png"}
        alt={weatherInfo.weather[0].main}
      />
      <div className="Forecast__temperature">
        {/* максимальная температура */}
        <span className="temperature__max">
          {Math.round(weatherInfo.temp.max)}
          <span>°</span>
        </span>
        {/* минимальная температура */}
        <span className="temperature__min">
          {Math.round(weatherInfo.temp.min)}
          <span>°</span>
        </span>
      </div>
    </div>
  );
}
export default Forecast;