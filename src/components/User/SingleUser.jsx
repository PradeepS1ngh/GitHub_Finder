import React, { useEffect } from "react";

import { Link } from 'react-router-dom';
import Repos from './Repos'

const SingleUser = ({ userName, loading, repos, getUser, getUserRepo , match}) => {

    useEffect(() => {
        getUser(match.params.login);
        getUserRepo(match.params.login);
    },[])

    const {
        bio,
        company,
        email,
        location,
        avatar_url,
        followers,
        following,
        html_url,
        login,
        hireable,
        name,
        public_gists,
        public_repos,
    } = userName;

    return <>
        <Link to='/' className='btn btn-danger'>Back To Home</Link>
            Hireable : { hireable ? <i className="fas fa-check-circle text-success"></i> : <i className="fas fa-times-circle text-danger"></i>}
        <div className="card grid-2">
            <div className="all-center">
                <img src={avatar_url} className="round-img" alt="img" style={{ width: '150px' }} />
                <h1>{name}</h1>
                {location && <p>Location : {location}</p>}
            </div>
            <div>
                {bio && <>
                    <h3>Bio</h3>
                    <p>{bio}</p>
                </>}
                <a href={html_url} className='btn btn-danger my-1'> View GitHub Profile</a>
                <ul>
                    <li>
                        {email && <> Email : {email} </>}
                    </li>
                    <li>
                        {login && <> UserName : {login}</>}
                    </li>
                    <li>
                        {company && <> Company : {company}</>}
                    </li>
                </ul>
            </div>
        </div>
        <div className="card text-center">
            <div className="badge badge-primary"> Followers : {followers}</div>
            <div className="badge badge-success"> Following : {following}</div>
            <div className="badge badge-light"> Public-Gists : {public_gists}</div>
            <div className="badge badge-dark"> Public_Repos : {public_repos}</div>
        </div>
        <Repos repos={repos} />
    </>;

}

export default SingleUser;
