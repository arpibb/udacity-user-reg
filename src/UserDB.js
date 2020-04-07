import React, {Component} from 'react'
import AddUserForm from './AddUserForm'
import UserList from './UserList'

class UserDB extends Component {
	state = {
		users: [],
			userNames: [],
	}

	addUser = (event,newUser,userNameExists) => {
		event.preventDefault()
		if(!userNameExists){
			this.setState((currentState)=>({
					users: [...currentState.users,newUser],
						userNames: [...currentState.userNames,newUser.userName]
			}))
		}
  }
	
	render(){
		return(
			<div>
				<AddUserForm 
					addUser = {this.addUser}
					userNames = {this.state.userNames}
				/>
				<UserList 
					users ={this.state.users}
				/>
			</div>
		)
  }
}


export default UserDB