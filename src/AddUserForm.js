import React, {Component} from 'react'

class AddUserForm extends Component{
	state = {
    	firstName: '',
      	lastName: '',
      	userName: '',
      	playedGames: 0,
      	existingUserName: false,
    }
	
	handleChange = (event) => {
      	let name = event.target.name
      	let value = event.target.value
    	this.setState((currentState)=>({
          firstName: name === 'firstName' ? value : currentState.firstName,
          lastName: name === 'lastName' ? value : currentState.lastName,
          userName: name === 'userName' ? value : currentState.userName,
          existingUserName: false,
      	}));
    };

	handleSubmit = (event,newUser) =>{
      	event.preventDefault()
      	const userNameExists = this.userNameExists(newUser.userName)
    	if(!userNameExists){
          this.props.addUser(event,newUser,userNameExists)
          this.clearInput()
          
        }
      else{
      	this.setState(()=>({
        	existingUserName: userNameExists
        }))
      }
    }

	clearInput = () => {
    	this.setState({
        	firstName: '',
      		lastName: '',
      		userName: '',
        })
    }
	
	userNameExists = (userName) =>{
    	return this.props.userNames.includes(userName)
    }

	inputIsEmpty = () => {
    	const { firstName, lastName, userName } = this.state
        if( !firstName || !lastName || !userName ) {
        	return true
        }
      	else {
        	return false
        }
    }

	render(){
    	return(
      		<div>
        	<form onSubmit={(event) => this.handleSubmit(event,this.state)}>
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
		{this.state.existingUserName && <p>This username is taken. Please choose another one!</p>}
      </div>
      )
    }
}

export default AddUserForm
