import React from 'react';

import Controller from './Controller';
import WeatherIcons from './WeatherIcons';

const dailyWeather = (props) => {
  return (
    <div className='main'>
    <header>
      <article className='left-header'>
        <Controller fetchWeather={props.fetchWeather}/>
        <p className='date'>{props.dailyWeather.date.weekday_short},
        <span> {props.dailyWeather.date.monthname_short}</span>
        <span> {props.dailyWeather.date.day}</span>
        <span> {props.dailyWeather.date.year}</span>
        </p>
        <p className='time'>{props.dailyWeather.date.pretty.slice(0, -25)}</p>
      </article>
      <article className='right-header'>
        <p className='big-temp'>{props.dailyWeather.high.fahrenheit}˚</p>
      </article>
    </header>
    <section className='icon'>
      <img className='big-icon'src={WeatherIcons[props.dailyWeather.icon]} alt=''/> 
    </section>
    <section className='conditions'>
    <p className='string-conditions'>{props.dailyWeather.conditions}</p>
    </section>
    </div>
  )
}

export default dailyWeather;