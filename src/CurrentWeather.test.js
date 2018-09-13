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
});

// currentWeather: mockData.current_observation,
//       hourlyWeather: mockData.hourly_forecast,
//       hourlyPeriod: 0,
//       dailyWeather: mockData.forecast.simpleforecast.forecastday,
//       dailyPeriod: 0,


// let hour = mockData.hourly_forecast[0];


//   beforeEach(() => {
//     fahrCelsToggle = true;
//     wrapper = shallow(<SevenHourCard key={hour} hour={hour} degreeUnit={fahrCelsToggle}/> );
//     mountedWrapper = mount(<SevenHourCard key={hour} hour={hour} degreeUnit={fahrCelsToggle}/> );
//   });


