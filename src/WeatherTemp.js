import React, { useState } from "react";
import "./WeatherTemp.css";

export default function WeatherTemp(props) {
  let [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  if (unit === "celsius") {
    return (
      <div className="WeatherTemp">
        <span className="degrees">{Math.round(props.celsius)}</span>
        <sup className="degreeClickers">
          °C |{" "}
          <a href="/" onClick={showFahrenheit}>
            °F
          </a>
        </sup>
      </div>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <div className="WeatherTemp">
        <span className="degrees">{Math.round(fahrenheit)} </span>
        <sup className="degreeClickers">
          <a href="/" onClick={showCelsius}>
            °C
          </a>{" "}
          | °F
        </sup>
      </div>
    );
  }
}
