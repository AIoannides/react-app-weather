import axios from "axios";
import "./Forecast.css";

export default function Forecast(props) {
  function handleResponse(response) {}

  let apiKey = "e7f2bc81aa08f090449b3f17d24f1333";
  let longitude = props.coords.lon;
  let latitude = props.coords.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="Forecast">
      <div className="row">
        <div className="col">
          <div className="Forecast-day">Friday</div>
          <img src="/" alt="icon" />
          <div className="Forecast-temperature">
            <span className="Max-temp">23°</span>
            <span className="Min-temp">18°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
