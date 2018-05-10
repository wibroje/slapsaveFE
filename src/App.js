import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import MachinesContainer from './containers/MachinesContainer'

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

class App extends Component {
  render() {
    return (
    	<div className="App">
        	<Header/>
        	<h1>slapSave Home</h1>
          <MachinesContainer/>
    	</div>
    
    );
  }
}

export default App;
