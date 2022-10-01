import React, { useLayoutEffect, useState } from "react";
import axios from "axios";
import Search from "./Search";
import { Puff } from "react-loader-spinner";

export default function Weather(props) {
  const [description, setDescription] = useState("");
  const [humidity, setHumidity] = useState("");
  const {wind, setWind} = useState("");
  const [temperature, setTemperature] = useState("");

function showDescription(response) {
  setDescription(response.data.main.description);
}
  function showTemperature(response) {
  setTemperature(response.data.main.temp);
}
function showHumidity (reposnse) {
  setHumidity(reposnse.data.main.humidity);
}
function showWind(response) {
  setWind(response.data.main.wind);
}

if (temperature) {
  return (
    <ul>
      <li> Temperature: {Math.round(temperature)}°C</li>
      <li> Description: {description}</li>
      <li>humidity{humidity}%</li>
      <li> Wind: {wind}km/h</li>
    </ul>
  );
} else {
  let apiKey = "fe80b84fc85eea0c9b1fafa5aa3bbced";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(showTemperature);
  axios.get(apiUrl).then(showDescription);
  axios.get(apiUrl).then(showHumidity);
  axios.get(apiUrl).then(showWind);
}
}

 