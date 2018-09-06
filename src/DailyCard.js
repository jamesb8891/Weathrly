import React from 'react';


const DailyCard = (props) => {
  return (
    <article>
      <p>{props.weather.high.fahrenheit}</p>
    </article>
  )
}

export default DailyCard;
