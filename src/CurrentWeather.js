import React from 'react';
import Controller from './Controller';


const CurrentWeather = (props) => {
  console.log(props.weather);
  return (
    <header>
      <article>
        <p>{props.weather.current_observation.observation_time_rfc822}</p>
        <Controller />
      </article>
      <article>
        <img src={props.weather.current_observation.icon_url} alt='Cloudy'/>
        <p>{props.weather.current_observation.temp_f.toFixed(0)}˚</p>
      </article>
    </header>
    // logo
    // Temp
  )
}

export default CurrentWeather;