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
      <Switch>
        <Route exact path="/" render={() => <Landingpage />} />

        <Route exact path="/love" render={() => <LoveApi />} />

        <Route
          exact
          path="/generate-fun-fact"
          render={() => <RandomNumFact />}
        />

        <Route exact path="/have-a-laugh" render={() => <JokeApi />} />
      </Switch>
    </>
  );
};

export default App;
