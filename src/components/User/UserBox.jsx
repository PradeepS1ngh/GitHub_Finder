import React from 'react';
import User from './User';

function UserBox(props){ 
        return(

            (props.loading == false) ? 
            <div style={ userStyle }>
                {props.users.map((user,key) => { 
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