import React from 'react';

import DailyCard from './DailyCard';
import './DailyWeather.css';


const DailyWeather = (props) => {
  console.log(props.weather);
  return (
    <section className='daily'>
      {
        props.weather.map((forecast, index) => {
          return <DailyCard weather={forecast} key={index} />
        }).slice(0, 100)
      }
    </section>
  )
}

export default DailyWeather;