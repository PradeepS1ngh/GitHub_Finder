
import React, { Component } from 'react';


class Search extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            text:""
        }
    }

    onSubmit =(e) =>{
        e.preventDefault();
        if(this.state.text == ""){
            this.props.setAlert("Please Enter UserName",'light');
        }else{
            this.props.searchUser(this.state.text);
            this.setState({text:""})
        }
        
    }
    onChange = (e) =>{
        this.setState({
            [e.target.name] : e.target.value
        });
    }
    render() { 
        return ( 
            <div >
                <form onSubmit={this.onSubmit} className='form'>
                    <input type="text" name='text' placeholder='Search User....' onChange={this.onChange} value={this.state.text}/>
                    <input type="submit" value="Search" className='btn btn-dark btn-block'/>
                </form>
                {(this.props.users.length != 0) ? <button className="btn btn-light btn-block" onClick={this.props.clearUser}>Clear</button> : <></>}
            </div>
        );
    }
}

export default Search;