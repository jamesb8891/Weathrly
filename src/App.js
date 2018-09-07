import React, { Component } from 'react';
import mockData from './Data';

import './App.css';
import HourlyWeather from './HourlyWeather';
import DailyWeather from './DailyWeather';
import CurrentWeather from './CurrentWeather';
import APIKey from './APIKey'

class App extends Component {
  constructor() {
    super();
    this.state = {
      weather: mockData,
      location: ''
    }
  }

  // componentDidMount() {
  //   // fetchWeather();
  // }

  fetchWeather = (location) => {
    this.setState({
      location
    })
    let fetchLocate = location.trim().split(',');
    let state = fetchLocate[1];
    let states = state.trim();

    // console.log(`https://api.wunderground.com/api/${APIKey}/conditions/hourly/forecast10day/q/${states}/${fetchLocate[0]}.json`)
    fetch(`https://api.wunderground.com/api/${APIKey}/conditions/hourly/forecast10day/q/${states}/${fetchLocate[0]}.json`)
      .then(data => data.json())
      .then(data => {
        this.setState({
          weather: data
        })
      })
      .catch(error => {
        console.log(error);
        throw new Error(error);
      })
  }

  
  render() {
    return (
      <div className='App'>
        <CurrentWeather fetchWeather={this.fetchWeather} weather={this.state.weather}/>
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
