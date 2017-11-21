import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import JsWay from './jsway/jsway'
import Fun from './fn/fun';
import PureFun from './purefunction/PureFunction';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
			{/*Only text can exist without expression rest need expression block*/}
			<JsWay welComTo="Pundlik" noMoreCoding={true}></JsWay>
			<Fun name="Pundlik" sleepy={true} time={10}></Fun>
			
			<PureFun num1={10} num2={11}/>
        </p>
      </div>
    );
  }
}

export default App;
