import React, {useState}from 'react';
import {Redirect} from 'react-router-dom'

const Check = () => {

    const [check, setCheck] = useState(false)
    const change = () => {
        console.log("clicked");
        setCheck(true)
    }
    return (
        check 
        ? 
        <Redirect to="/gettingstarted" />
        : 
        <>
            <h1>Hello Check</h1>
            <button onClick={change}>Search User</button>
        </>
        
    );
}

export default Check;