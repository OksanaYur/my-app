import React, { useState } from "react";
import axios from "axios";
import Search from "./Search";
import { Puff } from "react-loader-spinner";

export default function Weather(props) {
  const [description, setDescription] = useState("");
  const [humidity, setHumidity] = useState("");
  const {wind, setwind} = useState("");
  const [temperature, setTemperature] = useState("");

function showDescription(response) {
  setDescription(response.data.main.description);
}
  function showTemperature(response) {
  setTemperature(response.data.main.temp);
}
function showHumidity (reposnse) {
  setHumidity(response.data.main.humidity);
}
function setWind(response) {
  setWind(response.data.main.wind);
}

if (temperature) {
  
}

 // function handleRespnse(response) {
    //alert(`The weather in ${response.data.name} is ${Math.round(response.data.main.temp)} C`);
  }
  //let apiKey = "fe80b84fc85eea0c9b1fafa5aa3bbced";
  //let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;

  //axios.get(apiUrl).then(handleRespnse);
  //return (
    //<Puff
      height="80"
      width="80"
      radisu={1}
      color="red"
      ariaLabel="puff-loading"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />
  );
}