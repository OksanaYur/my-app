import React, { useState} from "react";
import axios from "axios";

export default function WeatherSearch() {
const [city, setCity] = useState("");
const [result, setResult] = useState("");
const [weather, setWeather] = useState("");

function displayWeather(response) {
    setResult(true);
    setWeather(
        {
            temperature: response.data.main.temp,
            wind: response.data.wind.speed,
            humidity: response.data.main.humidity,
            icon: `http://openweathermap.org/img/wn/${response.data.data.weather[0].icon}@2x.png`,
            description: response.data.weather[0].description});
        }

        function handleSubmit(event) {
            event.preventDefault();
            let apiKey = "fe80b84fc85eea0c9b1fafa5aa3bbced";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleRespnse);
        }

        function updateCity(city) {
            setCity(event.target.value);
        }
        let form = (
            <form onSubmit={handleSubmit}>
                <input type="search" place here="Enter a city ..." onChange={updateCity} />
                <button type="Submit">Search</button>
            </form>
            );

            if (result) {
                return (
                    <div>
                        {form}
                        <ul>
                            <li> Temperature: {Math.round(weather.temperature)}°C</li>
                            <li> Description: {weather.description}</li>
                            <li>humidity{weather.humidity}%</li>
                            <li> Wind: {weather.wind}km/h</li>
                            <li>
                                <img src={weather.icon} alt={weather.description} />
                            </li>
                        </ul>
                    </div>
                );
            } else {
                return form;
            }
}
