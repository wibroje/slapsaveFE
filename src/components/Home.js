import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
<div container target-container>
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
		          <p>I made this app because Joe told me to.</p>
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
		          <img src="http://bhaktivedantacollege.com/wp-content/uploads/2012/01/contact-1.jpg"/>
		          <span className="card-title">Contact</span>
		        </div>
		        <div className="card-content">
		          <p>Just start shouting my name and I will get to you eventually.</p>
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