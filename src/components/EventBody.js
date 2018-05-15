import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class EventBody extends Component {
constructor(props){
	super(props)
	this.state = {
		body : ''
	}
}

	componentWillMount(){
		let eventId = this.props.match.params.event_id;
		
		axios.get(`/api/events/${eventId}`).then((results) => {
			this.setState({
				body : results.data
			})
			
			
		})
		.catch(err => console.log(err))
	}

    onDelete(){
        let eventId = this.state.body._id;
        axios.delete(`/api/events/${eventId}`)
        .then(response => {
            this.props.history.push("/events")

        }).catch(err => console.log(err));
    }

  render() {	
    return (
    	<div>
    		<br/>
    		<Link to="/events" className="btn grey back-btn"><i className="fa fa-chevron-left"></i></Link>
    		
    		<ul className="collection with-header">
    			<li className="collection-header"><h4>{this.state.body.name}</h4> </li>
                <li className="collection-item"><strong>Type: </strong>{this.state.body.type} </li>
    			<li className="collection-item"><strong>City: </strong>{this.state.body.city} </li>
    			<li className="collection-item"><strong>Venue: </strong>{this.state.body.address}</li>
    			<li className="collection-item"><strong>Description: </strong>{this.state.body.description}</li>
    		</ul>
    		<Link className="btn green left" to={`/event/edit/${this.state.body._id}`}><i className="fas fa-edit"></i></Link>

    		<button onClick={this.onDelete.bind(this)} className="btn red right"><i className="fas fa-eraser"></i></button>

    		<br/>
    		<br/>
    		<br/>
    	</div>
    );
  }
}

export default EventBody;