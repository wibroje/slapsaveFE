import React, { Component } from 'react';
import axios from 'axios';
import EventName from '../components/EventName';

class EventsContainer extends Component {

	constructor(){
		super()
		this.state = {
			events : []
		}
	}

	componentWillMount(){
		axios.get("https://slapsave.herokuapp.com/api/events").then((results) => {
			this.setState({
				events : results.data
			})
			
		})
	}


  render() {

  	const eventItems = this.state.events.map((event, i) => {

  		return (
  			<EventName key={event._id} item={event}/>

  		)
  	})
  	
    return (
    	<div>
    		<h1>Events</h1>
    		<ul className="collection">	
    			{eventItems}
    		</ul>
        <div className="big-empty-div">

        </div>
    	</div>
    );
  }
}

export default EventsContainer;