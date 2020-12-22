import React, { useContext }from 'react';
import User from './User';
import GithubContext from '../../context/github/githubContext'

function UserBox(){ 

    const githubContext = useContext(GithubContext)
    const {users , loading } = githubContext;
        return(
            (loading == false) ? 
            <div style={ userStyle }>
                {users.map((user,key) => { 
                    return  <User user={user} key={key}/>
                })}
            </div>
            :
            <h1>
                loading...
            </h1>
        )
}

const userStyle = {
    display: "grid",
    gridTemplateColumns: 'repeat(3, 1fr)',
    // gridTemplateColumns: '1fr 1fr 1fr 1fr',
    gridGap : "5px"
}

export default UserBox;