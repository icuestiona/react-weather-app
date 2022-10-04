import React from "react";
import FormatDate from "./FormatDate";
import WeatherTemp from "./WeatherTemp";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <FormatDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="clearfix">
            <img
              src="https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/clear-day.svg"
              width="128"
              alt={props.data.weather[0].description}
              className="float-left"
            />
          </div>
        </div>
        <div className="float-right">
          <span className="temperature">
            <WeatherTemp celsius={props.data.temperature} />
          </span>
          <span className="unit">ºC</span>
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 24%</li>
            <li>
              Humidity:{""}
              {props.data.humidity}%
            </li>
            <li>
              Wind:{""}
              {Math.round(props.data.wind)} Km/h
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
