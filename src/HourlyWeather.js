import React from 'react';

import Controller from './Controller';
import WeatherIcons from './WeatherIcons';

const hourlyWeather = (props) => {
  return (
    <div className='main'>
    <header>
      <article className='left-header'>
        <Controller fetchWeather={props.fetchWeather} location={props.location}/>
          <p className='date'>{props.hourlyWeather.FCTTIME.weekday_name_abbrev},
            <span> {props.hourlyWeather.FCTTIME.month_name_abbrev}</span>
            <span> {props.hourlyWeather.FCTTIME.mday}</span>
            <span> {props.hourlyWeather.FCTTIME.year}</span>
          </p>
        <div className='time-controller'>
        <p className='time'>{props.hourlyWeather.FCTTIME.civil}</p>
          <button onClick={props.controlPeriod} className='prev-hour'>-</button>
          <button onClick={props.controlPeriod} className='next-hour'>+</button>
        </div>
      </article>
      <article className='right-header'>
        <p className='big-temp'>{props.hourlyWeather.temp.english.slice(0, -2)}˚</p>
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