import React from "react";
import "./Weather.css";

export default function Weather() {
  let weatherInfo = {
    city: "London",
    date: "Monday 12:00",
    description: "Clear Sky",
    temperature: 25,
    humidity: 10,
    wind: 5,
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/rain.png",
  };

  return (
    <div className="Weather">
      <form className="mb-3">
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Type a city.."
              className="form-control"
              autoComplete="off"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn w-100 search-button"
            />
          </div>
        </div>
      </form>
      <div className="overview">
        <h1>{weatherInfo.city}</h1>
        <ul>
          <li>{weatherInfo.date}</li>
          <li>{weatherInfo.description}</li>
        </ul>
      </div>
      <div className="row">
        <div className="col-6">
          <div className="clearfix weather-temperature">
            <img
              src={weatherInfo.imgUrl}
              alt={weatherInfo.description}
              className="float-left"
            />
            <div className="float-left">
              <strong>{weatherInfo.temperature}</strong>
              <span className="units">
                <a href="/">°C</a> | <a href="/">°F</a>
              </span>
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: {weatherInfo.humidity}%</li>
            <li>Wind: {weatherInfo.wind}km/h</li>
          </ul>
        </div>
      </div>
      <hr />
      <div className="row weather-forecast" id="forecast"></div>
    </div>
  );
}
