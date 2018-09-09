import React, { Component } from 'react';

import './Controller.css';

class Controller extends Component {
  constructor() {
    super();
    this.state = {
      location: ''
    }
  }

addLocation = () => {
  this.setState({
    location: ''
  })
}
  

  render() {
    return (
      <section>
        {
        !this.state.location &&
        <form autoComplete='off' onSubmit={(event) => {
          event.preventDefault();
          this.setState({
            location: event.target.elements.location.value
          }, this.props.fetchWeather(event.target.elements.location.value))
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
        this.state.location &&
        <article onClick={this.addLocation} className='location'>
          {this.state.location}
        </article>
        }
      </section>
    );
  }
}

export default Controller;
