import React, { Component } from 'react';
import './App.css';

class Header extends Component {
  render() {
    return (
      <div>
        <header className="App-header"> 
          <img src="slap.png" className="App-logo" alt="logo"/> 
        </header>
      </div>
    );
  }
}

export default Header;