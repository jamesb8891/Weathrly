import React from 'react';

import './Controller.css';

const Controller = (props) => {
    console.log('controller render');
    return ( 
      <section>
        {
        !props.location &&
        <form autoComplete='off' onSubmit={(event) => {
          event.preventDefault();
          if (event.target.elements.location.value.length === 5) {
            props.fetchZipCode(event.target.elements.location.value)
          } else {
            let targetLocation = event.target.elements.location.value;
            targetLocation = targetLocation.split(',');
            targetLocation[1] = targetLocation[1].trim();
            let location = `${targetLocation[1]}/${targetLocation[0]}`
            props.fetchWeather(location)
          }
        }}
        >
        <input 
          type='text'
          name='location'
          placeholder='Add your location'
        />
      </form>
        }

        {
        props.location &&
        <article onClick={props.addLocation} className='location'>
          {props.location}
        </article>
        }
      </section>
    );
  
}

export default Controller;
