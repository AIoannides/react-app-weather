import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  const [loading, setLoading] = useState(false);
  const [temperature, setTemperature] = useState(null);

  function handleResponse(response) {
    setTemperature(Math.round(response.data.main.temp));
    setLoading(true);
  }

  if (loading) {
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
          <h1>London</h1>
          <ul>
            <li>Monday 10:00</li>
            <li>Clear Sky</li>
          </ul>
        </div>
        <div className="row">
          <div className="col-6">
            <div className="clearfix weather-temperature">
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/rain.png"
                alt="Weather Icon"
                className="float-left"
              />
              <div className="float-left">
                <strong>{temperature}</strong>
                <span className="units">
                  <a href="/">°C</a> | <a href="/">°F</a>
                </span>
              </div>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>Humidity: 80%</li>
              <li>Wind: 8km/h</li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="row weather-forecast"></div>
      </div>
    );
  } else {
    const apiKey = "c0f3afe2be69a14ab9fb1d02ca6c2d47";

    let city = "London";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Page loading...";
  }
}
