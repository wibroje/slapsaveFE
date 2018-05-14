import React, { Component } from 'react';
import { Nav, NavItem, Navbar } from 'react-bootstrap'
import {
  Link
} from 'react-router-dom';


class Footer extends Component {
  render() {
    return (
      <div>
        <footer className="App-footer nav-bar-fixed-bottom"> 
        	<h1>Footer</h1>

        </footer>
      </div>
    )
  }
}

export default Footer;