import React, { Component } from 'react';


class Controller extends Component {
  constructor() {
    super();
    this.state = {
  
    }
  }
  

  render() {
    // add conditional to display form or current location.
    return (
      <form>
        <input type="text" placeholder="Enter new location"/>
        <input type="submit" name="Submit"/>
      </form>
    );
  }
}

export default Controller;

// {/* <header className="App-header">
//   <img src={logo} className="App-logo" alt="logo" />
//   <h1 className="App-title">Welcome to React</h1>
// </header>
// <p className="App-intro">
//   To get started, edit <code>src/App.js</code> and save to reload.
// </p> */}
