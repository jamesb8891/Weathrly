import React, { Component } from 'react';

import './App.css';
import CurrentWeather from './CurrentWeather';
import HourlyWeather from './HourlyWeather';
import DailyWeather from './DailyWeather';

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
      dailyWeather: mockData.forecast.simpleforecast.forecastday,
      dailyPeriod: 0,
    }
  }

  componentDidMount() {
  //  conditional for localStorage
  // 

    // fetchWeather();
  }

  controlPeriod = () => {

  }

  fetchWeather = (location) => {
    this.setState({
      location
    })
    
    let fetchLocate = location.trim().split(',');
    let state = fetchLocate[1];
    let states = state.trim();

    fetch(`https://api.wunderground.com/api/${APIKey}/conditions/hourly/forecast10day/q/${states}/${fetchLocate[0]}.json`)
      .then(data => data.json())
      .then(data => {
        this.setState({
          currentWeather: data.current_observation,
          hourlyWeather: data.hourly_forecast,
          dailyWeather: data.forecast.simpleforecast.forecastday
        })
      })
      .catch(error => {
        console.log(error);
        throw new Error(error);
      })
  }

  
  render() {
    return (
      <section className='App'>
      {
        this.state.hourlyPeriod + this.state.dailyPeriod === 0 &&
        <CurrentWeather fetchWeather={this.fetchWeather} 
        currentWeather={this.state.currentWeather}
        />  
      }
      {
        this.state.hourlyPeriod > 0 &&
        <HourlyWeather fetchWeather={this.fetchWeather} 
        hourlyWeather={this.state.hourlyWeather[this.state.hourlyPeriod]}
        />  
      }
      {
        this.state.dailyPeriod > 0 &&
        <DailyWeather fetchWeather={this.fetchWeather} 
        dailyWeather={this.state.dailyWeather[this.state.dailyPeriod]}
        />  
      }
      </section>
    );
  }
}

export default App;

