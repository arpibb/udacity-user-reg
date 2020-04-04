import React from 'react'

const User =(props) => {
  
  const { userName, playedGames, gamesAreHidden } = props
	return(
    	<div>
      		<p>{gamesAreHidden ? `${userName}` : `${userName} played ${playedGames} games.`}</p>
      	</div>
    )
}

export default User