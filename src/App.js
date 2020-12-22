import React, { useState } from "react";
import "./App.css";
import axios from "axios";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/User/Navbar";
import UserBox from "./components/User/UserBox";
import Search from "./components/User/Seach";
import Alerts from "./components/User/Alerts";
import About from "./components/User/About";
import SingleUser from "./components/User/SingleUser";

const App = () => {

  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);

  const searchUser = async (text) => {
    setLoading(true);                //this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    setUsers(res.data.items);//this.setState({ users: res.data.items, loading: false });
    setLoading(false);
  };

  const clearUser = () => {
    setUsers([]);
    setLoading(false);
  };     //this.setState({ users: [], loading: false });

  const showAlert = (msg, type) => {
    setAlert({ msg: msg, type: type });     //this.setState({ alert: { msg: msg, type: type } });
    setTimeout(() => {
      setAlert(null);     //this.setState({ alert: null });
    }, 2000);
  };

  const getUser = async (userName) => {
    setLoading(true);     //this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/users/${userName}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    setUser(res.data);
    setLoading(false);
    //this.setState({ user: res.data, loading: false });
  };

  const getUserRepo = async (userName) => {
    setLoading(true);//this.setState({loading:true});
    const res = await axios.get(
      `https://api.github.com/users/${userName}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    setRepos(res.data);
    setLoading(false);
    //this.setState({repos : res.data ,loading:false});
  }

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
                <Alerts alert={alert} />
                <Search
                  users={users}
                  searchUser={searchUser}
                  clearUser={clearUser}
                  setAlert={showAlert}
                />
                <UserBox
                  users={users}
                  loading={loading}
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
                getUser={getUser}
                repos={repos}
                getUserRepo={getUserRepo}
                userName={user}
                loading={loading}
              />
            )}
          />
        </Switch>
      </div>
    </div>
  );

}

export default App;
