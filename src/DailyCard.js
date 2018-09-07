import React from 'react';

import './DailyCard.css';


const DailyCard = (props) => {
  return (
    <article class="daily-card">
      <p className='daily-day'>{props.weather.date.weekday}</p>
      <div className='daily-cond'>
        <img className='daily-icon' src={props.weather.icon_url}/>
        <p>{props.weather.conditions}</p>
      </div>
      <p className='daily-temp'>{props.weather.high.fahrenheit}˚ / {props.weather.low.fahrenheit}˚</p>
    </article>
  )
}

export default DailyCard;
