import React, { Component } from 'react';
import Routes from './config/routes';
import Navbar from './components/Navbar';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';



class App extends Component{
  render() {
    return (
      <Router>
        <div>
          <Navbar/>
            <div className="container">
              { Routes }
            </div>
          <div className="fixed-action-btn">
            <Link to="/events/add" className="btn-floating btn-large blue lighter-2"><i className="fa fa-plus"></i></Link>
          </div>
    	  </div>
      </Router>
    );
  }
}

export default App;
