
import React, { useState } from 'react';


const Search = ({setAlert,searchUser,clearUser,users }) => {

    const[text,setText] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        if (text == "") {
            setAlert("Please Enter UserName", 'light');
        } else {
            searchUser(text);
            setText('');
        }

    }
    const onChange = (e) => setText(e.target.value);

    return (
        <div >
            <form onSubmit={onSubmit} className='form'>
                <input type="text" name='text' placeholder='Search User....' onChange={onChange} value={text} />
                <input type="submit" value="Search" className='btn btn-dark btn-block' />
            </form>
            {(users.length != 0) ? <button className="btn btn-light btn-block" onClick={clearUser}>Clear</button> : <></>}
        </div>
    );

}

export default Search;