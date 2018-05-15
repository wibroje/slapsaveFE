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
    	<div className="container target-container">
    		<div className="row">
    			<div className="col-lg-12">
        			<Machines machines={this.state.machines}
        					  location={this.props.location} />
        		</div>
        	</div>    	
    	</div>
    );
  }
}

export default MachinesContainer;