import React, { useEffect, useState } from "react";
import axios from "axios";
import "./weatherComp.scss";

const WeatherComp = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch weather data based on user's location
    const fetchWeatherData = async (latitude, longitude) => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=a35d4300d8490d8af0872e49d8798180`
        );
        setWeatherData(response.data);
        console.log(response.data)
      } catch (error) {
        console.error("Error fetching weather data:", error);
        setError("Error fetching weather data. Please try again later.");
      }
    };

    // Get user's location
    const getUserLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            fetchWeatherData(latitude, longitude);
          },
          (error) => {
            console.error("Error getting user location:", error);
            setError(
              "Error getting user location. Please allow location access or try again later."
            );
          }
        );
      } else {
        setError("Geolocation is not supported by your browser.");
      }
    };

    getUserLocation();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  if (!weatherData) {
    return (
      <div style={{ height: "100vh", textAlign: "center" }}>Loading...</div>
    );
  }

  const { main, weather, wind , name } = weatherData;
  const { temp, humidity, pressure } = main;
  const { speed, deg } = wind;
  const { description, icon } = weather[0];

  return (
    <div className="weather-comp">
      <div className="weather-details">
        <div className="weather-icon">
          <img
            src={`https://openweathermap.org/img/wn/${icon}.png`}
            alt="Weather Icon"
          />
        </div>
        <div>{name}</div>
        <div className="temperature">{Math.round(temp - 273.15)}°C</div>
        <div className="description">{description}</div>
        <div className="additional-data">
          <div className="data-item">
            <div className="data-label">Humidity:</div>
            <div className="data-value">{humidity}%</div>
          </div>
          <div className="data-item">
            <div className="data-label">Pressure:</div>
            <div className="data-value">{pressure} hPa</div>
          </div>
          <div className="data-item">
            <div className="data-label">Wind Speed:</div>
            <div className="data-value">{speed} m/s</div>
          </div>
          <div className="data-item">
            <div className="data-label">Wind Direction:</div>
            <div className="data-value">{deg}°</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherComp;
