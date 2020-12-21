import logo from "./logo.svg";
import React, { Fragment } from "react";
import "./App.css";
import axios from "axios";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/User/Navbar";
import UserBox from "./components/User/UserBox";
import Search from "./components/User/Seach";
import Alerts from "./components/User/Alerts";
import About from "./components/User/About";
import SingleUser from "./components/User/SingleUser";

class App extends React.Component {
  state = {
    users: [],
    user: {},
    repos: [],
    loading: false,
    alert: null,
  };

  searchUser = async (text) => {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    this.setState({ users: res.data.items, loading: false });
  };

  clearUser = () => this.setState({ users: [], loading: false });

  setAlert = (msg, type) => {
    this.setState({ alert: { msg: msg, type: type } });
    setTimeout(() => {
      this.setState({ alert: null });
    }, 2000);
  };

  getUser = async (userName) => {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/users/${userName}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    this.setState({ user: res.data, loading: false });
  };

  getUserRepo = async(userName) => {
    this.setState({loading:true});
    const res = await axios.get(
      `https://api.github.com/users/${userName}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    this.setState({repos : res.data ,loading:false});

  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => (
                <div className="container">
                  <Alerts alert={this.state.alert} />
                  <Search
                    users={this.state.users}
                    searchUser={this.searchUser}
                    clearUser={this.clearUser}
                    setAlert={this.setAlert}
                  />
                  <UserBox
                    users={this.state.users}
                    loading={this.state.loading}
                  />
                </div>
              )}
            />
            <Route exact path="/about" render={About} />
            <Route
              path="/user/:login"
              render={(props) => (
                <SingleUser
                  {...props}
                  getUser={this.getUser}
                  repos={this.state.repos}
                  getUserRepo={this.getUserRepo}
                  userName={this.state.user}
                  loading={this.state.loading}
                />
              )}
            />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
