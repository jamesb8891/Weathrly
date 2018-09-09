import React from 'react';

import Controller from './Controller';
import WeatherIcons from './WeatherIcons';

const hourlyWeather = (props) => {
  return (
    <div className='main'>
    <header>
      <article className='left-header'>
        <Controller fetchWeather={props.fetchWeather}/>
        <p className='date'>{props.hourlyWeather.FCTTIME.weekday_name_abbrev},
        <span> {props.hourlyWeather.FCTTIME.month_name_abbrev}</span>
        <span> {props.hourlyWeather.FCTTIME.mday}</span>
        <span> {props.hourlyWeather.FCTTIME.year}</span>
        </p>
        <p className='time'>{props.hourlyWeather.FCTTIME.civil}</p>
      </article>
      <article className='right-header'>
        <p className='big-temp'>{props.hourlyWeather.temp.english}˚</p>
      </article>
    </header>
    <section className='icon'>
      <img className='big-icon'src={WeatherIcons[props.hourlyWeather.icon]} alt=''/>
    </section>
    <section className='conditions'>
    <p className='string-conditions'>{props.hourlyWeather.condition}</p>
    </section>
    </div>
  )
}

export default hourlyWeather;