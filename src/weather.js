import React from "react";
import axios from "axios";
import { Puff } from "react-loader-spinner";
export default function Weather (props){

function handleResponse(response){
    
    alert(
      `the weather in ${response.data.name} is ${response.data.main.temp} °C`
    );
}
let apiKey = "2672779dd04931dc0259289fbe9db665";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(handleResponse);
    return (
      <Puff
        height="80"
        width="80"
        radius={1}
        color="#00BFFF"
        ariaLabel="puff-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    );
 }