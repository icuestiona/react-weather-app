import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container"></div>
      <h1>Weather App</h1>
      <Weather />
      <footer>
        This project was coded by Soraya Carvajal and is {""}
        <a
          href="https://github.com/icuestiona/react-weather-app"
          target="_blank"
          rel="noreferrer"
        >
          open-sourced on Github
        </a>
      </footer>
    </div>
  );
}
