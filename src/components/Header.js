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
          <nav>
            <Link to="/">Home</Link>{' ' + '|' + ' '}
            <Link to="/machines">Search Machines</Link>{' ' + '|' + ' '}
          </nav>
        </header>
      </div>
    );
  }
}

export default Header;