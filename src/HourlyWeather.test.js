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
  
  it('should render two article component', () => {
    expect(wrapper.find('article').length).toBe(2)
  })

  it('should render two article component', () => {
    expect(wrapper.find('article').length).toBe(2)
  })
  
  it('should render two button containers', () => {
    expect(wrapper.find('div').length).toBe(2)
  })

  it('should render one button initially', () => {
    expect(wrapper.find('button').length).toBe(1)
  })

  it('should a large icon representing the weather', () => {
    expect(wrapper.find('img').length).toBe(1)
  })

  it('should render four elements representing the weather for that period', () => {
    expect(wrapper.find('p').length).toBe(4)
  })
});