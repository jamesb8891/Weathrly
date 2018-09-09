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
        }, )
        // this.props.fetchWeather(event.target.elements.location.value)
          // console.log(this.state.location)
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
        <article onClick={this.changeLocation} className='location'>
          {this.state.location}
        </article>
        }
      </section>
    );
  }
}

export default Controller;

// {/* <header className="App-header">
//   <img src={logo} className="App-logo" alt="logo" />
//   <h1 className="App-title">Welcome to React</h1>
// </header>
// <p className="App-intro">
//   To get started, edit <code>src/App.js</code> and save to reload.
// </p> */}
