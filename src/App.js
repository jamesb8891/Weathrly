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

  // componentDidMount() {
  // }

  addLocation = () => {
    console.log('fire');
    this.setState({
      location: ''
    })
  }


  controlPeriod = (event) => {
    switch (event.target.className) {
      case 'prev-hour' :
        let minusHour = this.state.hourlyPeriod - 1;
        this.setState({ hourlyPeriod: minusHour });
        break;
      case 'next-hour' :
        let plusHour = this.state.hourlyPeriod + 1;
        this.setState({ hourlyPeriod: plusHour });
        break;
      case 'prev-day' :
        let minusDay = this.state.dailyPeriod - 1;
        this.setState({ dailyPeriod: minusDay });
        break;
      case 'next-day' :
        let plusDay = this.state.dailyPeriod + 1;
        this.setState({ dailyPeriod: plusDay} );
        break;
      default: return;
    } 
  }

  // fetchZipCode = (zipCode) => {

  // }

  fetchWeather = (location) => {
    // move this manipulation to controller
    let fetchLocate = location.trim().split(',');
    let state = fetchLocate[1];
    let states = state.trim();

    fetch(`https://api.wunderground.com/api/${APIKey}/conditions/hourly/forecast10day/q/${states}/${fetchLocate[0]}.json`)
      .then(data => data.json())
      .then(data => {
        this.setState({
          location: data.current_observation.display_location.full,
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
        <CurrentWeather 
        location={this.state.location}
        fetchWeather={this.fetchWeather}
        addLocation={this.addLocation}
        hourPeriod={this.state.hourlyPeriod}
        dailyPeriod={this.state.dailyPeriod}
        controlPeriod={this.controlPeriod} 
        currentWeather={this.state.currentWeather}
        hourlyWeather={this.state.hourlyWeather[0]}
        />  
      }
      {
        this.state.hourlyPeriod > 0 &&
        <HourlyWeather fetchWeather={this.fetchWeather}
        location={this.state.location}
        addLocation={this.addLocation}
        hourPeriod={this.state.hourlyPeriod}

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
       
        dailyPeriod={this.state.dailyPeriod}
        controlPeriod={this.controlPeriod} 
        dailyWeather={this.state.dailyWeather[this.state.dailyPeriod]}
        />  
      }
      </section>
    );
  }
}

export default App;

