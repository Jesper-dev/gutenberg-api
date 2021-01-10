import React from "react";

import Landingpage from "./components/Landingpage";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import "./style/styles.css";
import LoveApi from "./components/apis/LoveApi";
import RandomNumFact from "./components/apis/RandomNumFact";
import JokeApi from "./components/apis/JokeApi";

// import Route from "./components/Route";

const App = () => {
  return (
    <>
      <Router basename="jesperkyh.github.io/">
        <Landingpage />
        <Link to="love"></Link>
        <Link to="generate-fun-fact"></Link>
        <Link to="have-a-laugh"></Link>

        <Switch>
          <Route path="gutenberg-api/love" exact>
            <LoveApi />
          </Route>
          <Route path="gutenberg-api/generate-fun-fact" exact>
            <RandomNumFact />
          </Route>
          <Route path="gutenberg-api/have-a-laugh" exact>
            <JokeApi />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
