import React, {Component} from 'react'
import User from './User'
import PropTypes from 'prop-types'

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
				{users.length !== 0 && <button onClick={this.toggleGameVisibility}>{gamesAreHidden ? 'Show The Number Of Games Played' : 'Hide The Number Of Games Played'}</button>}
      	{users.map((user) => {
      		return(
						<User 
							key = {user.userName}
							userName = {user.userName}
							playedGames = {user.playedGames}
							gamesAreHidden = {gamesAreHidden}
						/>
					)
				})}
      </div>
    )
	}
}
UserList.propTypes = {
	users: PropTypes.array.isRequired,
}

export default UserList