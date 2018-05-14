import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render() {

  	const logoStyle = {
  		height: '1em',
  		width: '1em',
  		marginLeft: '.5em'
  	}

    return (
    <div>
	  <nav className="blue lighten-2">
	    <div className="nav-wrapper">
	      <a href="/" className="center brand-logo"><img src="slap-small.png" style={logoStyle}/>home</a>
	      <a data-target="main-menu" className="sidenav-trigger show-on-large"><i className="fa fa-bars"></i></a>
	      <ul className="right hide-on-small-only">
	        <li><Link to="/machines"><i className="fa fa-search"></i> Machines</Link></li>

	      </ul>
	    </div>
	  </nav>

	  <ul className="sidenav" id="main-menu">
	 	<li><Link to="/"><i className="fa fa-home"></i>Home</Link></li>
	  	<li><Link to="/machines"><i className="fa fa-search"></i>Machines</Link></li>
	  	<li><Link to="/events"><i className="fa fa-users"></i>Events</Link></li>
	  	<li><Link to="/events/add"><i className="fa fa-plus"></i>Add Event</Link></li>
	  </ul>
	</div>
    );
  }
}

export default Navbar;