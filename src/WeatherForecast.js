import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  let apiKey = `ec906dafd44a254d26b9dd410c431070`;
  let longitude = props.coordinate.lon;
  let latitude = props.coordinate.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);

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
