import React from "react";
import "./App.css";

import { BrowserRouter as Router } from 'react-router-dom';
import { Switch, Route } from "react-router-dom";

import Navbar from "./components/User/Navbar";

import About from "./components/User/About";
import SingleUser from "./components/User/SingleUser";
import GettingStarted from './components/User/GettingStarted'
import Check from './components/User/Check'

import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';

const App = () => {

  return (
    <GithubState>
      <AlertState>
        <Router>
          <Switch>
            <div className="App">
              <Navbar />
              {/* <Route exact path="/" component={Check} /> */}
              <div className="container">
                <Route exact path="/" component={GettingStarted} />
                <Route exact path="/about" component={About} />
                <Route path="/user/:login" component={SingleUser} />
              </div>
            </div>
          </Switch>
        </Router>
      </AlertState>
    </GithubState>
  );

}

export default App;
