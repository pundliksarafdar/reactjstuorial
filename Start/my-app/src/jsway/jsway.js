import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';

function JsWay(props){
//Shows error nothing return from JSWay expression should start in same line as return
//If it is in multiple line use round brackets 
//expression must be in curly brackets {props.noMoreCoding?" Stop coding":" Code more"} otherwise will be treated as text
/*
return 
	(<h1>Welcome {props.welComTo} to JSWay 
		{props.noMoreCoding?" Stop coding":" Code more"}
	</h1>)
}
*/	
return (<h1>Welcome {props.welComTo} to JSWay 
		{props.noMoreCoding?" Stop coding":" Code more"}
	</h1>)
}

export default JsWay;