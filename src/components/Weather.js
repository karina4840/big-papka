import React from "react";
import "../styles/Weather.css";


 function Current({ weatherInfo, location, date }) {
  return (
    <div className="Weather">

      <div className="Weather__info">
        <img
          className="Weather__icon"
          src={"https://openweathermap.org/img/wn/" +
            weatherInfo.current.weather[0].icon + ".png"}
          alt={weatherInfo.current.weather[0].main}
        />
        <ul className="Weather__list">
          <li className="list__temperature">
            {Math.round(weatherInfo.current.temp)}
            <span>°C</span>
          </li>
          <li> Humidity: {weatherInfo.current.humidity}% </li>
          <li> Wind: {Math.round(weatherInfo.current.wind_speed * 3.6)} km/h </li>
          <li> Pressure: {weatherInfo.current.pressure} mb</li>
        </ul>
      </div>

      <div className="Weather__other-info">
        <h2 className="other-info__city">
          {location.city || location.town},{" "}
          {location.state || location.country.toUpperCase()}
        </h2>
        <h3 className="other-info__day">{date}</h3>
        <h3 className="other-info__description">
          {weatherInfo.current.weather[0].description}
        </h3>
      </div>
    </div>
  );
}

export default Current;