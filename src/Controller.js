import React, { Component } from 'react';


class Controller extends Component {
  constructor() {
    super();
    this.state = {
      location: ''
    }
  }
  

  render() {
    return (
      <section>
        {
        !this.state.location &&
        <form onSubmit={(event) => {
          event.preventDefault();
          console.log(event.target.elements.location.value)
          this.setState({
            location: event.target.elements.location.value
        }, this.props.fetchWeather(event.target.elements.location.value))
          // console.log(this.state.location)
        }}
        >
        <input
          type='text'
          name='location'
          placeholder='Enter your location'
        />
        <button>Enter</button>
      </form>
        }

        {
        this.state.location &&
        <article>
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
