import React, { Component } from "react";
import { Link } from "react-router-dom";

class User extends Component {
    render() {
        const { avatar_url, login, html_url } = this.props.user;
        return (
            <div className="card text-center">
                <img
                    src={avatar_url}
                    alt=""
                    style={{ width: "50px" }}
                    className="round-img"
                />
                <h2>{login}</h2>
                <Link to={`/user/${login}`} className="btn btn-dark btn-sm my-1">
                    More
                </Link>
            </div>
        );
    }
}
export default User;
