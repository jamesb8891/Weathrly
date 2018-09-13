import React from "react";
import ReactDOM from 'react-dom'
import { shallow, mount } from "enzyme";
import CurrentWeather from "./CurrentWeather";
import mockData from './MockData'

describe("CurrentWeather", () => {
  let wrapper;
  let currentWeather = mockData.current_observation;
  let hourlyWeather = mockData.hourly_forecast[0];
  

  beforeEach(() => {
    wrapper = shallow(<CurrentWeather 
      currentWeather={currentWeather}
      hourlyWeather={hourlyWeather}

      />);
  });

  it("should exist", () => {
    expect(wrapper).toBeDefined();
  });

  it('should render controller component', () => {
    const controller = wrapper.find('Controller')
    expect(controller).toBeDefined()
    
  })

  it('should render two article component', () => {
    expect(wrapper.find('article').length).toBe(2)
  })

  it('should render two article component', () => {
    expect(wrapper.find('article').length).toBe(2)
  })
  
  it('should render two button containers', () => {
    expect(wrapper.find('div').length).toBe(3)
  })

  it('should render two buttons initially', () => {
    expect(wrapper.find('button').length).toBe(2)
  })

  it('should a large icon representing the weather', () => {
    expect(wrapper.find('img').length).toBe(1)
  })

  it('should render four elements representing the weather for that period', () => {
    expect(wrapper.find('p').length).toBe(4)
  })

});




