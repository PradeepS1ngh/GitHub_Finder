
import React , { Children, useReducer } from 'react';
import axios from 'axios';

import GithubContext from './githubContext';
import GithubReducer from './githubReducer';
import {
    SEARCH_USER,
    GET_USER,
    CLEAR_USER,
    GET_REPOS,
    SET_LOADING,
} from '../types'


const GithubState = props => {
    
    //?   All States That are Use in Our App 
    const initialState = {
        users : [],
        user : {},
        repos : [],
        loading : false
    }
    
    //?   Initialize Reducers
    const [state, dispatch] = useReducer(GithubReducer, initialState)
    
    //  Search User
    
    //  Get User
    
    //  Get Reops
    
    //  Clear User
    
    //  Set Loading
    
    
    //?   return contextProvider with all the Values
    return <GithubContext.Provider
        value={{
            users : state.users,
            user : state.user,
            repos : state.repos,
            loading : state.loading
        }}
    >
        {props.children}
    </GithubContext.Provider>
}

export default GithubState;
