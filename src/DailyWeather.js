import React from 'react';

import DailyCard from './DailyCard';


const DailyWeather = (props) => {
  console.log(props.weather);
  return (
    <section>
      {
        props.weather.map((forecast, index) => {
          return <DailyCard weather={forecast} key={index} />
        }).slice(0, 100)
      }
    </section>
  )
}

export default DailyWeather;