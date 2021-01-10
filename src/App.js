import React from "react";

import Landingpage from "./components/Landingpage";
import { HashRouter as Router, Route, Link, Switch } from "react-router-dom";

import "./style/styles.css";
import LoveApi from "./components/apis/LoveApi";
import RandomNumFact from "./components/apis/RandomNumFact";
import JokeApi from "./components/apis/JokeApi";

// import Route from "./components/Route";

const App = () => {
  return (
    <>
      <Router>
        <Landingpage />

        <Switch>
          <Route exact path="/love" component={LoveApi} />
          <Route exact path="/generate-fun-fact" component={RandomNumFact} />
          <Route exact path="/have-a-laugh" component={JokeApi} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
