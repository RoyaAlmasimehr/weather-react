import React from "react";
import "./weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city"
              className="form-control"
              autoFocuson
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="search"
              className="btn btn-primary w-100 "
            />
          </div>
        </div>
      </form>

      <h1>paris</h1>
      <ul>
        <li>Wednesday 07:00</li>
        <li>mostly cloudy</li>
      </ul>
      <div className="row">
        <div className="col-6">
            <div className="clearfix mt-3">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="Mostly cloudy "
          />
          <span className="temperature">6</span>
          <span className="unit">°C</span>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>precipitation:15%</li>
            <li>Humidity:72%</li>
            <li>Wind:13KM/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
