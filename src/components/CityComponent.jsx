import React, { useEffect, useState } from "react";
import { Row, Col, Dropdown, Card } from "react-bootstrap";
import * as icons from "react-bootstrap-icons";

const City = () => {
  const [weatherData, setWeatherData] = useState({
    city: "",
    day: "",
    time: "",
    icon: "",
    temperature: null,
    humidity: null,
    wind: null,
    pressure: null,
  });

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Palmi&units=metric&appid=6fd44c7c8e702a70c2533009b88694c8`);
        const data = await response.json();

        setWeatherData({
          city: data.name,
          day: getDay(data.dt),
          time: getTime(data.dt),
          icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
          temperature: data.main.temp,
          humidity: data.main.humidity,
          wind: data.wind.speed,
          pressure: data.main.pressure,
        });
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    fetchWeatherData();
  }, []);

  const getDay = (dt) => {
    const days = ["Domenica", "Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato"];
    return days[new Date(dt * 1000).getDay()];
  };

  const getTime = (dt) => {
    const hours = new Date(dt * 1000).getHours();
    const minutes = new Date(dt * 1000).getMinutes();
    return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`;
  };

  return (
    <>
      <Row>
        <Col xs={12} md={12} className="d-flex justify-content-center">
          <div className="city-info text-center">
            <h2>{weatherData.city}</h2>
            <p>
              {weatherData.day}, {weatherData.time}
            </p>
          </div>
        </Col>
      </Row>
      <Row className="align-items-center">
        <Col xs={6} md={6} className="d-flex justify-content-center">
          <div className="weather-icon">
            <img src={weatherData.icon} alt="" />
          </div>
        </Col>
        <Col xs={6} md={6} className="d-flex justify-content-center">
          <div className="temperature">
            <h1>{weatherData.temperature}°C</h1>
          </div>
        </Col>
      </Row>
      <Card className="card-weather">
        <Row>
          <Col xs={6}>
            <div className="weather-detail">
              <div className="d-flex align-items-center">
                <icons.Moisture />
                <p className="ml-2">{weatherData.humidity}%</p>
              </div>
              <div className="d-flex align-items-center">
                <icons.Wind />
                <p className="ml-2">{weatherData.wind} m/s</p>
              </div>
            </div>
          </Col>
          <Col xs={6}>
            <div className="weather-detail">
              <p>Precipitazioni: NaN</p>
              <div className="d-flex align-items-center">
                <icons.Compass />
                <p className="ml-2">{weatherData.pressure} hPa</p>
              </div>
            </div>
          </Col>
        </Row>
      </Card>
      <Card className="card-weather">
        <Row className="weather-forecast">
          <Col xs={2} className="text-center">
            {weatherData.day}
          </Col>
          <Col xs={2} className="d-flex justify-content-center">
            <icons.CloudRain /> {weatherData.humidity}%
          </Col>
          <Col xs={2} className="d-flex justify-content-center">
            <icons.Wind /> {weatherData.wind} m/s
          </Col>
          <Col xs={2} className="d-flex justify-content-center">
            <img src={weatherData.icon} alt="Weather Icon" width="50px" height="50px" />
          </Col>
          <Col xs={2} className="d-flex justify-content-center text-center">
            {weatherData.temperature}°C / {weatherData.temperature}°C
          </Col>
        </Row>
      </Card>
    </>
  );
};
export default City;
