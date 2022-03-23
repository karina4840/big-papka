import React, { useState } from "react";
import "../styles/Search.css";


export default function Search({ searchCity }) {
  const [currentCity, setCurrentCity] = useState("");

  {/* currentCity из ввода */}
  function handleInputChange(event) {
    setCurrentCity(event.target.value);
  }
  {/* поиск при клике на кнопку */}
  function handleButtonClick() {
    if (currentCity.trim() === "") return;
    searchCity(currentCity);
  }
  {/* поиск при нажатии Enter */}
  function handleKeyPress(e) {
    if (e.key === "Enter") handleButtonClick();
  }

  return (
    <div className="Search">
      <label className="Search__label">
        <input
          className="Search__input"
          placeholder="Find a city"
          value={currentCity}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
        />
      </label>
      <button className="Search__button" onClick={handleButtonClick}>
        Search
      </button>
    </div>
  );
}
