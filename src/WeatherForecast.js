import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Tue</div>
          <WeatherIcon code="01d" size={64} />
          <div className="WeatherForecast-temps">
            <span className="WeatherForecast-temp-max">19º</span>
            <span className="WeatherForecast-temp-min">9º</span>
          </div>
        </div>
      </div>
    </div>
  );
}
