import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Routes from './config/routes';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';



class App extends Component{
  render() {
    return (
      <Router>
    	  <div className='App'>
        	<Header/>
        { Routes }
    	</div>
      </Router>
    );
  }
}

export default App;
