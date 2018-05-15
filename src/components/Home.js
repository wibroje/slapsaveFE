import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
<div>
    <div>
    	<h1>Home</h1>
    </div>	
		<div>
		  <div className="row">
		  	<div className="col s12 m7">
		      <div className="card large">
		        <div className="card-image">
		          <img src="https://static1.squarespace.com/static/53daa276e4b040c0690e1deb/t/571c52b7cf80a16cec83117f/1461474008918/?format=750w"/>
		          <span className="card-title">About</span>
		        </div>
		        <div className="card-content">
		          <p>I am a very simple card. I am good at containing small bits of information.
		          I am convenient because I require little markup to use effectively.</p>
		        </div>
		        <div className="card-action">
		          <a href="#">This is a link</a>
		        </div>
		      </div>
		    </div>
		  </div>
		</div>

		<div>
		  <div className="row">
		    <div className="col s12 m7">
		      <div className="card large">
		        <div className="card-image">
		          <img src="https://static1.squarespace.com/static/53daa276e4b040c0690e1deb/t/571c52b7cf80a16cec83117f/1461474008918/?format=750w"/>
		          <span className="card-title">Contact</span>
		        </div>
		        <div className="card-content">
		          <p>I am a very simple card. I am good at containing small bits of information.
		          I am convenient because I require little markup to use effectively.</p>
		        </div>
		        <div className="card-action">
		          <a href="#">This is a link</a>
		        </div>
		      </div>
		    </div>
		  </div>
		</div>
	</div>
    );
  }
}

export default Home;