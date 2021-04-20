import React, { useState } from "react";

import InfoCard from "./InfoCard";
import axios from "axios";

import "./Weather.css";

export default function Weather(props) {
  const [weatherInfo, setWeatherInfo] = useState({ loading: false });
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    setWeatherInfo({
      loading: true,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      city: response.data.name,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function search() {
    const apiKey = "e7f2bc81aa08f090449b3f17d24f1333";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleChange(event) {
    setCity(event.target.value);
  }

  if (weatherInfo.loading) {
    return (
      <div className="Weather">
        <form className="mb-3" onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Type a city..."
                className="form-control"
                autoComplete="off"
                onChange={handleChange}
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
        <InfoCard info={weatherInfo} />
      </div>
    );
  } else {
    search();
    return "Page Loading...";
  }
}
