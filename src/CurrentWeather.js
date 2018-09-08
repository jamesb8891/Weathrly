import React from 'react';

import Controller from './Controller';
import './CurrentWeather.css';


const CurrentWeather = (props) => {
  return (
    <div>

    <header>
      <article className='left-header'>
        <Controller fetchWeather={props.fetchWeather}/>
        <p className='time'>{props.currentWeather.observation_time_rfc822.slice(0, -9)}</p>
      </article>
      <article className='right-header'>
        <p className='big-temp'>{props.currentWeather.temp_f.toFixed(0)}˚</p>
      </article>
    </header>
    <section className='icon'>

      <img className='big-icon'src={props.currentWeather.icon_url} alt='Cloudy'/>
    </section>
    <section className='conditions'>

    </section>
    </div>
    // logo
    // Temp
  )
}

export default CurrentWeather;