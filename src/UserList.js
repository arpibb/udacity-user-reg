import React, {Component} from 'react'
import User from './User'

class UserList extends Component {
  state = {
	gamesAreHidden: false,
	}
	toggleGameVisibility = () =>{
    	this.setState((currentState)=>({
        	gamesAreHidden: !currentState.gamesAreHidden
        }))
    }
  render(){
  	const { users } = this.props
	const { gamesAreHidden } = this.state
	return(
    	<div>
      	<button onClick={this.toggleGameVisibility}>{gamesAreHidden ? 'Show The Number Of Games Played' : 'Hide The Number Of Games Played'}</button>
      	{users.map((user) => {
      		return(
    		<User 
              	key = {user.userName}
      			userName = {user.userName}
                playedGames = {user.playedGames}
				gamesAreHidden = {gamesAreHidden}
      		/>
  		)})}
      		
      	</div>
    )
}
}

export default UserList