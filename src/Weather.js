import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import "./App";
import "./WeatherTemp";
import FormatDate from "./FormatDate";
import WeatherTemp from "./WeatherTemp";

export default function Weather(props) {
  const [weather, setWeather] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  const [loading, setLoading] = useState(false);

  function displayWeather(response) {
    setCity();
    setLoading(true);
    setWeather({
      city: response.data.name,
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      iconUrl: `https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/clear-day.svg`,
      date: new Date(response.data.dt * 1000),
      feelsLike: Math.round(response.data.main.feels_like),
    });
  }

  if (loading) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city..."
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input type="submit" value="search" className="btn btn-primary" />
            </div>
          </div>
        </form>
        <h1 id="city">{weather.city}</h1>
        <ul>
          <li>
            <FormatDate date={weather.date} />
          </li>
          <li className="text-capitalize">{weather.description}</li>
        </ul>
        <div className="row mt-3">
          <div className="col-6">
            <div className="clearfix">
              <img
                src={weather.iconUrl}
                alt={weather.description}
                className="float-left"
              />
              <div className="float-left">
                <span className="temperature">
                  <WeatherTemp celsius={weather.temperature} />
                </span>
                <span className="unit">ºC</span>
              </div>
              <div className="col-6">
                <ul>
                  <li>Precipitation: 24%</li>
                  <li>
                    Humidity:{""}
                    {weather.humidity}%
                  </li>
                  <li>
                    Wind:{""}
                    {Math.round(weather.wind)}Km/h
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = `ec906dafd44a254d26b9dd410c431070`;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);

    return "Loading...";
  }
}
