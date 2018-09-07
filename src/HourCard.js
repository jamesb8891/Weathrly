import React from 'react';

import './HourCard.css';


const HourCard = (props) => {
  return (
    <article className='hour-card'>
      <p>{props.forecast.FCTTIME.civil}</p>
      <img className='hour-icon' src={props.forecast.icon_url}/>
      <p className='hour-conditions'>{props.forecast.condition}</p>
      <p className='hour-temp'>{props.forecast.temp.english}˚</p>
    </article>
  )
}



export default HourCard;
