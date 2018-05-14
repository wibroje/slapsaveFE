import React, { Component } from 'react';
import axios from 'axios';

class EventsContainer extends Component {

	constructor(){
		super()
		this.state = {
			events : []
		}
	}

	componentWillMount(){
		axios.get("/api/events").then((results) => {
			this.setState({
				events : results.data
			})
			
		})
	}


  render() {

  	const eventItems = this.state.events.map((event, i) => {
  		return (
  			<li className="collection-item">{event.name}</li>
  		)
  	})
  	
    return (
    	<div>
    		<h1>Events</h1>
    		<ul className="collection">	
    			{eventItems}
    		</ul>
    	</div>
    );
  }
}

export default EventsContainer;