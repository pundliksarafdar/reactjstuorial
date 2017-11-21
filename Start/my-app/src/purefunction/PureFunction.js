import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';

class PureFun extends Component {
  
  render() {
    return (
	<div>	
	{//Properties are read only so we can not alter propeties of react components hence next statement is error statement
	  //this.props.num1=this.props.num1+this.props.num2
	}
	  <h1 className="App">
		Your numbers are {this.props.num1} and {this.props.num2} sum is {(this.props.num1+this.props.num2)}
      </h1>
	  
	  </div>
    );
  }
}

//Mandatory step
export default PureFun;
