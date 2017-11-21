import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';

class Fun extends Component {
  render() {
    return (
      <h1 className="App">
        ES6 class way
		Welcome to {this.props.name}, {this.props.sleepy?"Go and sleep ":"listen to music"} its {this.props.time} O'clock
      </h1>
    );
  }
}

export default Fun;
