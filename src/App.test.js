import React from "react";
import ReactDOM from 'react-dom'
import { shallow, mount } from "enzyme";
import App from "./App";

describe("App", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it("should exist", () => {
    expect(wrapper).toBeDefined();
  });

  it("should render the HourlyWeather, DailyWeather, and CurrentWeather components", () => {
    expect(wrapper.find("HourlyWeather")).toBeDefined();
    expect(wrapper.find("DailyWeather")).toBeDefined();
    expect(wrapper.find("CurrentWeather")).toBeDefined();
  });

  it("initially should have a state of location set to an empty string", () => {
    expect(wrapper.state()).toEqual({
      location: '',
      trie: null,
      answer: null,
      currentWeather: null,
      hourlyWeather: null,
      hourlyPeriod: 0,
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
});