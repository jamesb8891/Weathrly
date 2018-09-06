import React, { Component } from 'react';
import data from './Data';

import './App.css';
import HourlyWeather from './HourlyWeather';
import DailyWeather from './DailyWeather';
import CurrentWeather from './CurrentWeather';

class App extends Component {
  constructor() {
    super();
    this.state = {
      weather: data
    }
  }

  

  render() {
    return (
      <div className='App'>
        <CurrentWeather weather={this.state.weather}/>
        <HourlyWeather 
          weather={this.state.weather.hourly_forecast}
        />
        <DailyWeather 
          weather={this.state.weather.forecast.simpleforecast.forecastday}
        />
      </div>
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
