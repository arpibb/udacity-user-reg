import React, {Component} from 'react'

class AddUserForm extends Component{
	state = {
    	firstName: '',
      	lastName: '',
      	userName: ''
    }
	
	handleChange = (event) => {
      	let name = event.target.name
      	let value = event.target.value
    	this.setState((currentState)=>({
          firstName: name === 'firstName' ? value : currentState.firstName,
          lastName: name === 'lastName' ? value : currentState.lastName,
          userName: name === 'userName' ? value : currentState.userName,
      	}));
    };
	addItem = () => {}

	inputIsEmpty = () => {}

	render(){
    	return(
      		<div>
        	<form onSubmit={this.addItem}>
          	<input
            type="text"
            placeholder="Enter First Name"
            value={this.state.firstName}
            onChange={(event) => this.handleChange(event)}
			name="firstName"
          />
			<input
            type="text"
            placeholder="Enter Last Name"
            value={this.state.lastName}
            onChange={this.handleChange}
			name="lastName"
          />
			<input
            type="text"
            placeholder="Enter Username"
            value={this.state.userName}
            onChange={this.handleChange}
			name="userName"
          />
          <button disabled={this.inputIsEmpty()}>Add</button>
        </form>
      </div>
      
      )
    }
}

export default AddUserForm
