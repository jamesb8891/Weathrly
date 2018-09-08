import React, { Component } from 'react';

import './App.css';
import CurrentWeather from './CurrentWeather';
import APIKey from './APIKey'
import mockData from './Data';

class App extends Component {
  constructor() {
    super();
    this.state = {
      location: '',
      currentWeather: mockData.current_observation,
      hourlyWeather: mockData.hourly_forecast,
      hourlyPeriod: 0,
      dailyWeather: mockData.forecast.simpleforecast,
      dailyPeriod: 0,
    }
  }

  componentDidMount() {
   

    // fetchWeather();
  }

  // fetchWeather = (location) => {
  //   this.setState({
  //     location
  //   })
  //   let fetchLocate = location.trim().split(',');
  //   let state = fetchLocate[1];
  //   let states = state.trim();

  //   // console.log(`https://api.wunderground.com/api/${APIKey}/conditions/hourly/forecast10day/q/${states}/${fetchLocate[0]}.json`)
  //   fetch(`https://api.wunderground.com/api/${APIKey}/conditions/hourly/forecast10day/q/${states}/${fetchLocate[0]}.json`)
  //     .then(data => data.json())
  //     .then(data => {
  //       this.setState({
  //         weather: data
  //       })
  //     })
  //     .catch(error => {
  //       console.log(error);
  //       throw new Error(error);
  //     })
  // }

  
  render() {
    return (
      // if this.state > 0 &&
      <section className='App'>
        <CurrentWeather 
        fetchWeather={this.fetchWeather} 
        currentWeather={this.state.currentWeather}
        // hourlyWeather={this.state.hourlyWeather[this.state.hourlyPeriod]}
        // dailyWeather={this.state.dailyWeather[this.state.dailyPeriod]}
        />
      </section>
    );
  }
}

export default App;

// {/* <header className="App-header">
//   <img src={logo} className="App-logo" alt="logo" />
//   <h1 className="App-title">Welcome to React</h1>
// </header>
// <p className="App-intro">
//   To get started, edit <code>src/App.js</code> and save to reload.
// </p> */}
