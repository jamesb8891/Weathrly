import React from "react";
import ReactDOM from 'react-dom'
import { shallow, mount } from "enzyme";
import App from "./App";

describe("DailyWeather", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it("should exist", () => {
    expect(wrapper).toBeDefined();
  });
});

