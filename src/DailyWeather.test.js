import React from "react";
import ReactDOM from 'react-dom'
import { shallow, mount } from "enzyme";
import DailyWeather from "./DailyWeather";
import mockData from './MockData'

describe("DailyWeather", () => {
  let wrapper;
  let dailyWeather = mockData.forecast.simpleforecast.forecastday[0];


  beforeEach(() => {
    wrapper = shallow(<DailyWeather
      dailyWeather={dailyWeather}
    />);
  });

  it("should exist", () => {
    expect(wrapper).toBeDefined();
  });
});