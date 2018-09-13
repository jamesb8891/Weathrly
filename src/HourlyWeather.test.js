import React from "react";
import ReactDOM from 'react-dom'
import { shallow, mount } from "enzyme";
import HourlyWeather from "./HourlyWeather";
import mockData from './MockData'

describe("HourlyWeather", () => {
  let wrapper;
  let hourlyWeather = mockData.hourly_forecast[0];

  beforeEach(() => {
    wrapper = shallow(<HourlyWeather
      hourlyWeather={hourlyWeather}
    />);
  });

  it("should exist", () => {
    expect(wrapper).toBeDefined();
  });
});