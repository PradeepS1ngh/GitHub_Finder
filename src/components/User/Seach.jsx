import React, { useState, useContext } from "react";
import GithubContext from '../../context/github/githubContext'
import AlertContext from '../../context/alert/alertContext'

const Search = () => {

    const githubContext = useContext(GithubContext);
    const { searchUsers , clearUser }  = githubContext
    
    const alertContext = useContext(AlertContext);

    const [text, setText] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();
        if (text == "") {
            alertContext.setAlert("Please Enter UserName", "light");
        } else {
            searchUsers(text);
            setText("");
        }
    };


    const onChange = (e) => setText(e.target.value);

    return (
        <div className="Search">
            <form onSubmit={onSubmit} className="form">
                <input
                    type="text"
                    name="text"
                    placeholder="Search User...."
                    onChange={onChange}
                    value={text}
                />
                <input
                    type="submit"
                    value="Search"
                    className="btn btn-dark btn-block"
                />
            </form>
            {githubContext.users.length != 0 ? (
                <button className="btn btn-light btn-block" onClick={clearUser}>
                    Clear
                </button>
            ) : (
                    <></>
                )}
        </div>
    );
};

export default Search;
