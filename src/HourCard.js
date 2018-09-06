import React from 'react';

import './HourCard.css';


const HourCard = (props) => {
  return (
    <article className='hour-card'>
      <p>{props.forecast.FCTTIME.civil}</p>
      <p>{props.forecast.condition}</p>
      <img className='hour-icon' src={props.forecast.icon_url}/>
      <p className='hour-temp'>{props.forecast.temp.english}˚</p>
    </article>
  )
}



export default HourCard;
