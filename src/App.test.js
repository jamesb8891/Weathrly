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

  it("should render the HourlyWeather and DailyWeather component", () => {
    expect(wrapper.find("HourlyWeather")).toBeDefined();
    expect(wrapper.find("DailyWeather")).toBeDefined();
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
})