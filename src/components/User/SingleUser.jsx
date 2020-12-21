import React, { Component } from "react";

class SingleUser extends Component {

    componentDidMount() {
        this.props.getUser(this.props.match.params.login);
    }

    render(props) {
        const {
            bio,
            company,
            email,
            events_url,
            followers,
            followers_url,
            following,
            following_url,
            gists_url,
            html_url,
            login,
            name,
            public_gists,
            public_repos,
            subscriptions_url,
        } = this.props.userName;

        const {loading} = this.props;
        return <div>{name}</div>;
    }
}

export default SingleUser;
