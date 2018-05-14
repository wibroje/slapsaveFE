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
    	let filteredList = this.props.machines.data.filter(
    			(machine) => {
    				return machine.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1 || machine.manufacturer.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
    				//if you can't find this.state.search within machine name, do not return
    				//if found then return it within filterList
    			}
    	);



  	  			let machineList = filteredList.map( (machine, index) => {



					return <li key={index}>
					<div>
						<h1>{machine.name}</h1>
						
						<img src={machine.image}/>
						<p>{machine.manufacturer + '-' + machine.year}</p>
						<br/>
						
						<iframe src={machine.video}
   								width="100%" 
   								height="650" 
   								frameBorder="0" 
   								>
   						</iframe>

   					
   						<br/>
   						<br/><br/><hr/><br/><br/><br/><br/>

					</div>	
					</li>
  	  			
					
					
  	  			})
	    return (

	    	<div>
	    		<br/>
	    		<h2>Search by machine name or manufacturer</h2>
	    		<br/>
			    		<input  style={{textAlign:'center'}}
			    				type='text'
			    				placeholder='Search'
			    				value={this.state.search}
			    				onChange={this.updateSearch.bind(this)} />
			    		<hr/>
	    		<div>
	    			
			        	<ul>{machineList}</ul>
			        
			    </div>
	    	</div>
    
    	);
	} 
}

export default Machines;
