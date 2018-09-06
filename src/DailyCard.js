import React from 'react';


const DailyCard = (props) => {
  return (
    <article>
      <p>{props.weather.date.weekday}</p>
      <img src={props.weather.icon_url}/>
      <p>{props.weather.conditions}</p>
      <p>{props.weather.high.fahrenheit}˚</p>
      <p>{props.weather.low.fahrenheit}˚</p>
    </article>
  )
}

export default DailyCard;
