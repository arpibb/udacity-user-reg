import React, {Component} from 'react'
import AddUserForm from './AddUserForm'
import UserList from './UserList'


class UserDB extends Component {
  	state = {
    	users: []
    }
	render(){
    	return(
      		<div>
            	<AddUserForm />
             	<UserList />
            </div>
      
      )
    }
}

export default UserDB