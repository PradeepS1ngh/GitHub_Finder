import React from 'react'
import ReposItem from './ReposItem'

const Repos = ({repos}) => {
    console.log(repos);
    return (
        repos.map( repo => <ReposItem repo={repo}/>)
        // <h1>Bros</h1>
    );
}
export default Repos;