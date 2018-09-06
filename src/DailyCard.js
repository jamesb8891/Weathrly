import React from 'react';

import './DailyCard.css';


const DailyCard = (props) => {
  return (
    <article>
      <p>{props.weather.date.weekday}</p>
      <img src={props.weather.icon_url}/>
      <p>{props.weather.conditions}</p>
      <p>{props.weather.high.fahrenheit}˚ / {props.weather.low.fahrenheit}˚</p>
    </article>
  )
}

export default DailyCard;
