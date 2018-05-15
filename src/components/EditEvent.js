import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class EditEvent extends Component {
	constructor(props){
		super(props)
		this.state = {
			_id : '',
			name : '',
			type : '',
			city : '',
			address : '',
			description : ''
		}

		this.handleInputChange = this.handleInputChange.bind(this);
	}

	componentWillMount(){
		let eventId = this.props.match.params.event_id;
		
		axios.get(`https://slapsave.herokuapp.com/api/events/${eventId}`).then(response => {
			this.setState({
				_id : response.data._id,
				name : response.data.name,
				type : response.data.type,
				city : response.data.city,
				address : response.data.address,
				description : response.data.description
			}, () => {
			console.log(this.state)
		})
			
		})
		.catch(err => console.log(err))
	}

	editEvent(newEvent){
		console.log(newEvent)
		axios.request({
			method : 'put',
			url : `https://slapsave.herokuapp.com/api/events/${this.state._id}`,
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
		this.editEvent(newEvent);
	}

	handleInputChange(event){
		const target = event.target;
		const value = target.value;
		const name = target.name;

		this.setState({
			[name] : value
		});
	}

  render() {	
    return (
    	<div>
    	<br/>
    	<Link to="/events" className="btn grey back-btn"><i className="fa fa-chevron-left"></i></Link>
    		<h1>Edit Event</h1>
    		<form onSubmit={this.onSubmit.bind(this)}>
    			<div>
    			<div className="input-field">
    				<input type="text" name="name" ref="name" value={this.state.name} onChange={this.handleInputChange}/>
    				<label htmlFor="name"></label>
    			</div>
    			<div className="input-field">
    				<input type="text" name="type" ref="type" value={this.state.type} onChange={this.handleInputChange}/>
    				<label htmlFor="type"></label>
    			</div>
    			<div className="input-field">
    				<input type="text" name="city" ref="city" value={this.state.city} onChange={this.handleInputChange}/>
    				<label htmlFor="city"></label>
    			</div>
    			<div className="input-field">
    				<input type="text" name="address" ref="address" value={this.state.address} onChange={this.handleInputChange}/>
    				<label htmlFor="address"></label>
    			</div>
    			<div className="input-field">
    				<input type="text" name="description" ref="description" value={this.state.description} onChange={this.handleInputChange}/>
    				<label htmlFor="description"></label>
    			</div>
    				<input type="submit" value="Save" className="btn purple"/>
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

export default EditEvent;