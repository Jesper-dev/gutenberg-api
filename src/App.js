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
    <Router>
      <>
        <Link to="/"></Link>
        <Link to="/love"></Link>
        <Link to="/generate-fun-fact"></Link>
        <Link to="/have-a-laugh"></Link>

        <Switch>
          <Route exact path="/">
            <Landingpage />
          </Route>
          <Route exact path="/love">
            <LoveApi />
          </Route>
          <Route exact path="/generate-fun-fact">
            <RandomNumFact />
          </Route>
          <Route exact path="/have-a-laugh">
            <JokeApi />
          </Route>
        </Switch>
      </>
    </Router>
  );
};

export default App;
