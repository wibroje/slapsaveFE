import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class PostEvent extends Component {

	addEvent(newEvent){
		console.log(newEvent)
		axios.request({
			method : 'post',
			url : 'https://slapsave.herokuapp.com/api/events',
			data : newEvent
		}).then(response => {
			console.log(response)
			 this.props.history.push('/events');
		}).catch(err => console.log(err))
	}

	onSubmit(event){
		event.preventDefault();
		const newEvent = {
			name : this.refs.name.value,
			type : this.refs.type.value,
			city : this.refs.city.value,
			address : this.refs.address.value,
			description : this.refs.description.value
		}
		this.addEvent(newEvent);
	}

  render() {	
    return (
    	<div>
    	<br/>
    	<Link to="/events" className="btn grey back-btn"><i className="fa fa-chevron-left"></i></Link>
    		<h1>Post Event</h1>
    		<form onSubmit={this.onSubmit.bind(this)}>
    			<div>
    			<div className="input-field">
    				<input type="text" name="name" ref="name"/>
    				<label htmlFor="name">Name</label>
    			</div>
    			<div className="input-field">
    				<input type="text" name="type" ref="type"/>
    				<label htmlFor="type">Type</label>
    			</div>
    			<div className="input-field">
    				<input type="text" name="city" ref="city"/>
    				<label htmlFor="city">City</label>
    			</div>
    			<div className="input-field">
    				<input type="text" name="address" ref="address"/>
    				<label htmlFor="address">Venue</label>
    			</div>
    			<div className="input-field">
    				<input type="text" name="description" ref="description"/>
    				<label htmlFor="description">Description</label>
    			</div>
    				<input type="submit" value="Add" className="btn purple"/>
    			</div>
    			<br/>
    			<hr/>
    			<br/>
    			<br/>
    		</form>
    	</div>
    );
  }
}

export default PostEvent;