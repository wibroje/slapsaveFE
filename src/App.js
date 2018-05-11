import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Home from './components/Home';
import MachinesContainer from './containers/MachinesContainer';

class App extends Component{
  render() {
    return (
      <Router>
    	  <div className="App">
        	<Header/>
        	<Route exact path="/" component={Home} />
          <Route path="/machines" component={MachinesContainer} />         
    	</div>
      </Router>
    );
  }
}

export default App;
