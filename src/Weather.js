import React from "react";
import "./Weather.css";

export default function weather() {
  return (
    <div className="weather">
      <h1>Madrid</h1>
      <ul>
        <li>Thursday 11:00</li>
        <li>Mostly Cloudy</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/clear-day.svg"
            alt="Mostly Cloudy"
          />
          12ºC
        </div>
      </div>
    </div>
  );
}
