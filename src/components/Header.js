import React, { Component } from 'react';
import '../App.css';
import {
  Link
} from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div>
        <header className="App-header"> 
          <img src="slap.png" className="App-logo" alt="logo"/> 
          <nav className='navbar container'>
          <div className="Row">
          <div className="col-lg-4">
            <Link to="/">Home</Link>
          </div>
          <div className="col-lg-4">
            <Link to="/machines">Search Machines</Link>
          </div>
          <div className="col-lg-4">
            <Link to="/contact">Contact Us</Link>
          </div>
          </div>
          </nav>
        </header>
      </div>
    );
  }
}

export default Header;