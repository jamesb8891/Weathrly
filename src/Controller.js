import React from 'react';

import './Controller.css';

const Controller = (props) => {
  
    return ( 
      <section>
        {
        !props.location &&
        <form autoComplete='off' onSubmit={(event) => {
          event.preventDefault();
          props.fetchWeather(event.target.elements.location.value)
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
