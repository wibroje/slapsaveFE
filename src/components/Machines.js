import React, { Component } from 'react';

class Machines extends Component {
	constructor(){
		super()
		this.state = {
			search : ''
		};

	}

	updateSearch(event){
		this.setState({search: event.target.value.substr(0,20)})
	
	}

    render() {
    			let filteredList =this.props.machines.data.filter(
    					(machine) => {
    						return machine.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1 || machine.manufacturer.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
    						//if you can't find this.state.search within machine name, do not return
    						//if found then return it within filterList
    					}
    			);



  	  			let machineList = filteredList.map( (machine, index) => {
  	  				
					return <li key={index}>
						<h4>{machine.name}</h4>
						<p>{machine.manufacturer}</p>
					</li>
					
				})
    return (

    	<div className="sidebar">
    		<input  type='text'
    				placeholder='Search'
    				value={this.state.search}
    				onChange={this.updateSearch.bind(this)}/>
        	<ul>{machineList}</ul>
    	</div>
    
    );
  }
}

export default Machines;
