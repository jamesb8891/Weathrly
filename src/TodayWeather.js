import React from 'react';


const TodayWeather = (props) => {
  console.log(props.weather);
  return (
    <div>
    <p>{props.weather.current_observation.display_location.city}</p>
    <img src={props.weather.current_observation.icon_url} alt='Cloudy'/>
    

    </div>

    // <p>Fuck</p>
    // <p>Fuck</p>
  )
}

export default TodayWeather;
