import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherInfo, setWeatherInfo] = useState({ loading: false });

  function handleResponse(response) {
    setWeatherInfo({
      loading: true,
      date: "Tuesday 07:00",
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      city: response.data.name,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/rain.png",
    });
  }

  if (weatherInfo.loading) {
    return (
      <div className="Weather">
        <form className="mb-3">
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Type a city..."
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
            <li className="text-capitalize">{weatherInfo.description}</li>
          </ul>
        </div>
        <div className="row">
          <div className="col-6">
            <div className="clearfix weather-temperature">
              <img
                src={weatherInfo.iconUrl}
                alt={weatherInfo.description}
                className="float-left"
              />
              <div className="float-left">
                <strong>{Math.round(weatherInfo.temperature)}</strong>
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
        <div className="row weather-forecast"></div>
      </div>
    );
  } else {
    const apiKey = "c0f3afe2be69a14ab9fb1d02ca6c2d47";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Page loading...";
  }
}
