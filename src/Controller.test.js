import React from "react";
import ReactDOM from 'react-dom'
import { shallow, mount } from "enzyme";
import Controller from "./Controller";

describe("Controller", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Controller />);
  });

  it("should exist", () => {
    expect(wrapper).toBeDefined();
  });

  it('should render a form on initialization', () => {
    expect(wrapper.find('form').length).toBe(1)
  })

  it('the form should have one input', () => {
    expect(wrapper.find('input').length).toBe(1)
  })

  it('should render a main section container', () => {
    expect(wrapper.find('section').length).toBe(1)
  })

});

