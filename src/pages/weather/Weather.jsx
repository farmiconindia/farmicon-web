import React from "react";
import "./weather.scss";
import WeatherComp from "../../components/weather/WeatherComp";

const Weather = ({ changeLang }) => {
  return (
    <div className="weather">
      <WeatherComp />
    </div>
  );
};

export default Weather;
