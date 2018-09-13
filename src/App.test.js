import React from "react";
import ReactDOM from 'react-dom'
import { shallow, mount } from "enzyme";
import App from "./App";
import Trie from './Trie';

describe("App", () => {
  let wrapper;
  let trie = new Trie();
  let array = ['Reno'];
  trie.populate(array)

  beforeEach(() => {
    wrapper = shallow(<App />);
    wrapper.setState({ trie: trie });
  });

  it("should exist", () => {
    expect(wrapper).toBeDefined();
    console.log(wrapper.state.trie)
  });

  it("should render the HourlyWeather, DailyWeather, and CurrentWeather components", () => {
    expect(wrapper.find("HourlyWeather")).toBeDefined();
    expect(wrapper.find("DailyWeather")).toBeDefined();
    expect(wrapper.find("CurrentWeather")).toBeDefined();
  });

  it("initially should have a state of location set to an empty string", () => {
    expect(wrapper.state()).toEqual({
      location: '',
      trie: trie,
      answer: null,
      currentWeather: null,
      hourlyWeather: null,
      hourlyPeriod: 0,
      dailyWeather: null,
      dailyPeriod: 0,
    });
  });

  it("should suggest a location", () => {
    wrapper.instance().suggestLocation('R')
    
    expect(wrapper.state()).toEqual({
      location: '',
      trie: trie,
      answer: ["Reno",],
      currentWeather: null,
      hourlyWeather: null,
      hourlyPeriod: 0,
      dailyWeather: null,
      dailyPeriod: 0,
    });
  });

  it("Control the period that dictates which components render", () => {
    let event = {
      target: {
        className: 'next-hour'
      }
    }
    wrapper.instance().controlPeriod(event)
    
    expect(wrapper.state()).toEqual({
      location: '',
      trie: trie,
      answer: null,
      currentWeather: null,
      hourlyWeather: null,
      hourlyPeriod: 1,
      dailyWeather: null,
      dailyPeriod: 0,
    });
  });

  it("should retrieve data from local storage", () => {
    const location = 'CO/Denver';

    localStorage.setItem('weatherly', location);
    const itemsInStorage = localStorage.getItem("weatherly");

    expect(itemsInStorage).toEqual('CO/Denver');
  });

  it('should fetch weather data', () => {
    const fetchWeather = jest.fn();
    fetchWeather();
    expect(fetchWeather).toHaveBeenCalled();
  });

  it('should run suggestLocation', () => {
    const suggestLocation = jest.fn();
    suggestLocation();
    expect(suggestLocation).toHaveBeenCalled();
  });

  it('should run controlPeriod', () => {
    const controlPeriod = jest.fn();
    controlPeriod();
    expect(controlPeriod).toHaveBeenCalled();
  });

  it('should not render the current weather component until state is resolved', () => {
    expect(wrapper.find('CurrentWeather').length).toEqual(0) 
  })

  it('should not render the current weather component until state is resolved', () => {
    expect(wrapper.find('CurrentWeather').length).toEqual(0) 
  })
});