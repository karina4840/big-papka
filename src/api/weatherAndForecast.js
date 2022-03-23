import axios from "axios";


// инфо из openweathermap api чтобы работать с координатами городов
async function getWeatherAndForecast(coordinates) {
  const response = await axios.get(
    "https://api.openweathermap.org/data/2.5/onecall?",
    {
      params: {
        lat: coordinates.lat,
        lon: coordinates.lng,
        exclude: "minutely,hourly,alerts",
        appid: "411eff37397fe81ad94367d30b70cc0f",
        units: "metric"
      }
    }
  );

  return response;
}

export default getWeatherAndForecast;
