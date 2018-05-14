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
					<div className="col-lg-6">
						<h1>{machine.name}</h1>
						
						<img className='machine-image'
								src={machine.image}/>
						<p>{machine.manufacturer + '-' + machine.year}</p>
						<br/>
						
						<iframe className='vidyas'
								src={machine.video}
   								width="350" 
   								height="650" 
   								frameBorder="0" 
   								>
   						</iframe>

   						<Comments
   							comments={machine.comments}
   							name={machine.name}
   						/>
   						<br/>
   						<PostComment
   							name={machine.name}
   							_id={machine._id}
   							location={this.props.location}
   						/>
   						<br/><br/><hr/><br/><br/><br/><br/>

					</div>	
					</li>
  	  			
					
					
  	  			})
    return (

    	<div>
    		<br/>
    		<h2>Search by machine name or manufacturer</h2>
    		<br/>
		    		<input  className='search-input'
		    				style={{textAlign:'center'}}
		    				type='text'
		    				placeholder='Search'
		    				value={this.state.search}
		    				onChange={this.updateSearch.bind(this)} />
		    		<hr/>
    		<div className="Row">
    			
		        	<ul>{machineList}</ul>
		        
		    </div>
    	</div>
    
    );
} 
}

export default Machines;
