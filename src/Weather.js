import React, { useState } from "react";

export default function Weather(props) {
  const [description, setDescription] = useState("");
  const [humidity, setHumidity] = useState("");
  const [wind, setWind] = useState("");

  function showTemperature(response) {
    setTemperature(response.data.main.temp);
  }
  function showDescription(response) {
    setDescription(response.data.main.description);
  }
  function showHumidity(response) {
    setHumidity(response.data.main.humidity);
  }
  function showWind(response) {
    setWind(response.data.main.wind);
  }
  if (temperature) {
    return (
      <ul>
        <li>Temperature: {Math.round(temperature)}°C </li>
        <li>Description: {description} </li>
        <li>Humidity: {humidity}% </li>
        <li>Wind: {wind} km/h </li>
      </ul>
    );
  } else {
    axios.get(apiUrl).then(showTemperature);
    axios.get(apiUrl).then(showDescription);
    axios.get(apiUrl).then(showHumidity);
    axios.get(apiUrl).then(showWind);
  }
}
