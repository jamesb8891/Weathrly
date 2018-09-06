import React from 'react';

import HourCard from './HourCard';
import './HourlyWeather.css';


const HourlyWeather = (props) => {
  return (
    <section className='hourly'>
      {
        props.weather.slice( 0, 7).map((forecast, index) => {
          return <HourCard forecast={forecast} key={index} />
        }).slice(0, 100)
      }
    </section>
  )
}

export default HourlyWeather;
