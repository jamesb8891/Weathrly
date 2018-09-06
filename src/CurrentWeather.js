import React from 'react';

import Controller from './Controller';
import './CurrentWeather.css';


const CurrentWeather = (props) => {
  console.log(props.weather);
  return (
    <header>
      <article className='left-header'>
        <p className='time'>{props.weather.current_observation.observation_time_rfc822.slice(0, -5)}</p>
        <Controller />
      </article>
      <article className='right-header'>
        <img className='big-icon'src={props.weather.current_observation.icon_url} alt='Cloudy'/>
        <p className='big-temp'>{props.weather.current_observation.temp_f.toFixed(0)}˚</p>
      </article>
    </header>
    // logo
    // Temp
  )
}

export default CurrentWeather;