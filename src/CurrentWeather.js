import React from 'react';

import Controller from './Controller';
import WeatherIcons from './WeatherIcons';


const CurrentWeather = (props) => {
  return (
    <div className='main'>
    <header>
      <article className='left-header'>
        <Controller fetchWeather={props.fetchWeather}/>
        <p className='date'>{props.currentWeather.observation_time_rfc822.slice(0, -14)}</p>
        <p className='time'>{props.currentWeather.observation_time.slice(28, -4)}</p>
      </article>
      <article className='right-header'>
        <p className='big-temp'>{props.currentWeather.temp_f.toFixed(0)}˚</p>
      </article>
    </header>
    <section className='icon'>
      <img className='big-icon'src={WeatherIcons[props.currentWeather.icon]} alt=''/>
    </section>
    <section className='conditions'>
    <p className='string-conditions'>{props.currentWeather.weather}</p>
    </section>
    </div>
  )
}

export default CurrentWeather;