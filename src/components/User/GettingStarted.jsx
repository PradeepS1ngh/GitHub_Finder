import React from 'react'
import UserBox from "./UserBox";
import Search from "./Seach";
import Alerts from "./Alerts";
// import Navbar from "./components/User/Navbar";

const GettingStarted = () => {
    return (
        <>
            <div className="container">
                <Alerts />
                <Search />
                <UserBox />
            </div>
        </>
    );
}

export default GettingStarted;