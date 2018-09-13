import React, { Component } from 'react';

import './App.css';
import Trie from './Trie';
import CurrentWeather from './CurrentWeather';
import HourlyWeather from './HourlyWeather';
import DailyWeather from './DailyWeather';
import cityData from './CityData.js';
import APIKey from './APIKey'

class App extends Component {
  constructor() {
    super();
    this.state = {
      location: '',
      trie: null,
      answer: null,
      currentWeather: null,
      hourlyWeather: null,
      hourlyPeriod: 0,
      dailyWeather: null,
      dailyPeriod: 0,
    }
  }

  componentWillMount() {
    let trie = new Trie();
    trie.populate(cityData.data); 
    this.setState({ trie: trie })
    if (this.getLocalStorage()) {
      this.fetchWeather(this.getLocalStorage());
    } else {
      this.fetchWeather('autoip');
    }
  }

  addLocation = () => {
    this.setState({
      location: ''
    })
  }

  suggestLocation = (string) => {
    if (!isNaN(string)) {return};
    let answer = this.state.trie.suggest(string).slice(0, 10);
    this.setState({ answer: answer })
  }
  
  fetchWeather = (location) => {
    fetch(`https://api.wunderground.com/api/${APIKey}/conditions/hourly/forecast10day/q/${location}.json`)
      .then(data => data.json())
      .then(data => {
        this.setState({
          location: data.current_observation.display_location.full,
          currentWeather: data.current_observation,
          hourlyWeather: data.hourly_forecast,
          dailyWeather: data.forecast.simpleforecast.forecastday
        })
        this.setLocalStorage(location);
      })
      .catch(error => {
        alert('Please enter a valid City, State or Zip Code');
      })
  }

  setLocalStorage = (location) => {
    localStorage.setItem('weatherly', location);
  }

  getLocalStorage = () => {
    const storedLocation = localStorage.getItem('weatherly');
    return storedLocation;
  }

  controlPeriod = (event) => {
    switch (event.target.className) {
      case 'prev-hour':
        let minusHour = this.state.hourlyPeriod - 1;
        this.setState({ hourlyPeriod: minusHour });
        break;
      case 'next-hour':
        let plusHour = this.state.hourlyPeriod + 1;
        this.setState({ hourlyPeriod: plusHour });
        break;
      case 'prev-day':
        let minusDay = this.state.dailyPeriod - 1;
        this.setState({ dailyPeriod: minusDay });
        break;
      case 'next-day':
        let plusDay = this.state.dailyPeriod + 1;
        this.setState({ dailyPeriod: plusDay });
        break;
      default: return;
    }
  }

  render() {
    return (
      this.state.currentWeather &&
      <section className='App'>
        {
          this.state.hourlyPeriod + this.state.dailyPeriod === 0 &&
         
          <CurrentWeather
            location={this.state.location}
            fetchWeather={this.fetchWeather}
            fetchZipCode={this.fetchZipCode}
            suggestLocation={this.suggestLocation}
            addLocation={this.addLocation}
            hourPeriod={this.state.hourlyPeriod}
            dailyPeriod={this.state.dailyPeriod}
            controlPeriod={this.controlPeriod}
            currentWeather={this.state.currentWeather}
            hourlyWeather={this.state.hourlyWeather[0]}
            answer={this.state.answer}
          />
        }
        {
          this.state.hourlyPeriod > 0 &&
          <HourlyWeather fetchWeather={this.fetchWeather}
            location={this.state.location}
            addLocation={this.addLocation}
            hourPeriod={this.state.hourlyPeriod}
            fetchZipCode={this.fetchZipCode}
            controlPeriod={this.controlPeriod}
            hourlyWeather={this.state.hourlyWeather[this.state.hourlyPeriod]}
          />
        }
        {
          this.state.dailyPeriod > 0 &&
          <DailyWeather
            location={this.state.location}
            addLocation={this.addLocation}
            fetchWeather={this.fetchWeather}
            fetchZipCode={this.fetchZipCode}
            dailyPeriod={this.state.dailyPeriod}
            controlPeriod={this.controlPeriod}
            dailyWeather={this.state.dailyWeather[this.state.dailyPeriod]}
            changeBackground={this.changeBackground}
          />
        }
      </section>
    );
  }
}

export default App;

