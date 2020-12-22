import React from "react";
import "./App.css";

import { BrowserRouter as Router } from 'react-router-dom';
import { Switch, Route } from "react-router-dom";

import Navbar from "./components/User/Navbar";
import UserBox from "./components/User/UserBox";
import Search from "./components/User/Seach";
import Alerts from "./components/User/Alerts";
import About from "./components/User/About";
import SingleUser from "./components/User/SingleUser";

import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';

const App = () => {

  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className="App">
            <Navbar />
            <div className="container">
              <Switch>
                <Route
                  exact
                  path="/"
                  render={(props) => (
                    <div className="container">
                      <Alerts />
                      <Search />
                      <UserBox />
                    </div>
                  )}
                />
                <Route exact path="/about" component={About} />
                <Route path="/user/:login" component={SingleUser} />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );

}

export default App;
