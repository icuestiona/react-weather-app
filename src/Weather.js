import React from "react";
import "./Weather.css";

export default function weather() {
  return (
    <div className="weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city..."
              className="form-control"
            />
          </div>
          <div className="col-3">
            <input type="submit" value="search" className="btn btn-primary" />
          </div>
        </div>
      </form>
      <h1>Madrid</h1>
      <ul>
        <li>Thursday 11:00</li>
        <li>Clear Sky</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/clear-day.svg"
            alt="Mostly Cloudy"
            width="128px"
          />
          12ºC
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 24%</li>
            <li>Humidity: 72%</li>
            <li>Wind: 13 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
