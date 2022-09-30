import React from "react";
import axios from "axios";
import { Puff } from "react-loader-spinner";

export default function Weather(props) {
  function handleRespnse(response) {
    //alert(`The weather in ${response.data.name} is ${Math.round(response.data.main.temp)} C`);
  }
  let apiKey = "fe80b84fc85eea0c9b1fafa5aa3bbced";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleRespnse);
  return (
    <Puff
      height="80"
      width="80"
      radisu={1}
      color="#FFFF00"
      ariaLabel="puff-loading"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />
  );
}