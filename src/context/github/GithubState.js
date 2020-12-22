import React, { Children, useReducer } from "react";
import axios from "axios";

import GithubContext from "./githubContext";
import GithubReducer from "./githubReducer";
import {
    SEARCH_USER,
    GET_USER,
    CLEAR_USER,
    GET_REPOS,
    SET_LOADING,
} from "../types";

const GithubState = (props) => {

    //?   All States That are Use in Our App
    const initialState = {
        users: [],
        user: {},
        repos: [],
        loading: false,
    };

    //?   Initialize Reducers
    const [state, dispatch] = useReducer(GithubReducer, initialState);

    //  Search User
    const searchUsers = async (text) => {
        setloading();
        const res = await axios.get(
            `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
        );
        dispatch({ type: SEARCH_USER, payload: res.data.items });
    };

    //  Get User
    const getUser = async (userName) => {
        setloading();     
        const res = await axios.get(
            `https://api.github.com/users/${userName}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
        );
        dispatch({type : GET_USER , payload : res.data});
    };

    //  Clear User
    const clearUser = () => dispatch({type : CLEAR_USER})

    //  Get Reops
    const getUserRepo = async (userName) => {
        setloading();
        const res = await axios.get(
            `https://api.github.com/users/${userName}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
        );
        dispatch({type : GET_REPOS , payload : res.data})
    }

    //  Set Loading
    const setloading = () => dispatch({ type: SET_LOADING });


    //?   return contextProvider with all the Values
    return <GithubContext.Provider
            value={{
                users: state.users,
                user: state.user,
                repos: state.repos,
                loading: state.loading,
                searchUsers,
                clearUser,
                getUser,
                getUserRepo,
            }}
        >
            {props.children}
        </GithubContext.Provider>
};

export default GithubState;
