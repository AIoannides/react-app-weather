import DisplayDate from "./DisplayDate";

export default function InfoCard(props) {
  return (
    <div className="InfoCard overview">
      <h1>{props.info.city}</h1>
      <ul>
        <li>
          <DisplayDate date={props.info.date} />
        </li>
        <li className="text-capitalize">{props.info.description}</li>
      </ul>

      <div className="row">
        <div className="col-6">
          <div className="clearfix weather-temperature">
            <img
              src={props.info.iconUrl}
              alt={props.info.description}
              className="float-left"
            />
            <div className="float-left">
              <strong>{Math.round(props.info.temperature)}</strong>
              <span className="units">
                <a href="/">°C</a> | <a href="/">°F</a>
              </span>
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: {props.info.humidity}%</li>
            <li>Wind: {props.info.wind}km/h</li>
          </ul>
        </div>
      </div>
      <hr />
      <div className="row weather-forecast"></div>
    </div>
  );
}
