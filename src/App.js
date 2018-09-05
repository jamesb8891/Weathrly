import React, { Component } from 'react';
import data from './Data';
import './App.css';
import TodayWeather from './TodayWeather';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <section className='header'>
          <TodayWeather weather={data}/>
        </section>
        <section className='HourForecast'>
          {/* <HourForecast /> */}
        </section>
        <section className='DayForecast'>
          {/* <DayForecast /> */}
        </section>
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
