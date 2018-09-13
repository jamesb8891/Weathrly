import React from 'react';

import './Controller.css';

const Controller = (props) => {
    return ( 
      <section className='controller'>
        {
        !props.location &&
        <form autoComplete='off' onSubmit={(event) => {
          event.preventDefault();
          if (event.target.elements.location.value.length === 5) {
            props.fetchWeather(event.target.elements.location.value)
          } else {
            let targetLocation = event.target.elements.location.value;
            targetLocation = targetLocation.split(',');
            targetLocation[1] = targetLocation[1].trim();
            let location = `${targetLocation[1]}/${targetLocation[0]}`
            props.fetchWeather(location)
          }
        }}
        >
        <input onChange={(event) => {
          event.preventDefault();
          props.suggestLocation(event.target.value);
        }}
          type='text'
          name='location'
          list='data'
          placeholder='Add your location'
        />

        <datalist id="data">
          {
            props.answer &&
            props.answer.map((item, index) =>
            <option value={item} key={index}/>
          )}
        </datalist>
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
