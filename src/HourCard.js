import React from 'react';


const HourCard = (props) => {
  return (
    <article>
      <p>{props.forecast.FCTTIME.civil}</p>
      <p>{props.forecast.condition}</p>
      <img src={props.forecast.icon_url}/>
      <p>{props.forecast.temp.english}˚</p>
    </article>
  )
}



export default HourCard;
