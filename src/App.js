import React from "react";
import LoveApi from "./components/apis/LoveApi";
import RandomNumFact from "./components/apis/RandomNumFact";
import Landingpage from "./components/Landingpage";
import ReactRouter from "react-router";
import {
  BrowserRouter as Router,
  HashRouter,
  Route,
  Link,
  Switch,
  useParams,
} from "react-router-dom";

import "./style/styles.css";
import JokeApi from "./components/apis/JokeApi";
// import Route from "./components/Route";

const App = () => {
  return (
    <>
      <Router basename="https://jesperkyh.github.io/gutenberg-api">
        <Landingpage />
        <Link to="love"></Link>
        <Link to="generate-fun-fact"></Link>
        <Link to="have-a-laugh"></Link>

        <Switch>
          <Route path="/gutenberg-api/love" exact>
            <LoveApi />
          </Route>
          <Route path="/gutenberg-api/generate-fun-fact" exact>
            <RandomNumFact />
          </Route>
          <Route path="/gutenberg-api/have-a-laugh" exact>
            <JokeApi />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
