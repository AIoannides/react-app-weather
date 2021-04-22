import React from "react";
import "./ForecastDay.css";

export default function ForecastDay(props) {
  function maxTemp() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }

  function minTemp() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }

  let iconCode = props.data.weather[0].icon;
  let weatherIcon = `http://openweathermap.org/img/wn/${iconCode}@2x.png`;

  return (
    <div className="ForecastDay">
      <div className="Forecast-day">{props.data.dt}</div>
      <img src={weatherIcon} alt={props.data.weather[0].description} />
      <div className="Forecast-temperature">
        <span className="Max-temp">{maxTemp()}</span>
        <span className="Min-temp">{minTemp()}</span>
      </div>
    </div>
  );
}
