import React, { Component } from 'react';
import Routes from './config/routes';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';

import {
  BrowserRouter as Router,
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
            <Link to="/event/add" className="btn-floating btn-large blue lighter-2"><i className="fa fa-plus"></i></Link>
          </div>
          <Footer/>
    	  </div>
      </Router>
    );
  }
}

export default App;
