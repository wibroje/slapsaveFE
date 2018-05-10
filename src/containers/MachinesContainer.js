import React, { Component } from 'react';
import Machines from '../components/Machines';
import axios from 'axios';

class MachinesContainer extends Component {

	constructor(){
		super()
		this.state = {
			machines : {
				data : []
			}
			
		}
	}

	componentDidMount(){
		axios.get("/api/machines").then((results) => {
			this.setState({
				machines : results
			})
		})
	}


  render() {
    return (
    	<div>
        	<Machines machines={this.state.machines} />
    	</div>
    
    );
  }
}

export default MachinesContainer;