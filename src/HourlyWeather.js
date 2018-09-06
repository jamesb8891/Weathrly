import React from 'react';

import HourCard from './HourCard';


const HourlyWeather = (props) => {
  return (
    <section>
      {
        props.weather.slice( 0, 7).map((forecast, index) => {
          return <HourCard forecast={forecast} key={index} />
        }).slice(0, 100)
      }
    </section>
  )
}

export default HourlyWeather;