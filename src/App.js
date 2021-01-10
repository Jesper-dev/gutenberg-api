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
      <Router basename={process.env.PUBLIC_URL}>
        <Landingpage />

        <Switch>
          <Route exact path="/love" component={LoveApi} />
          <Route exact path="/generate-fun-fact" component={RandomNumFact} />
          <Route exact path="/have-a-laugh" component={JokeApi} />

          {/* <Route path="gutenberg-api/generate-fun-fact" exact>
            <RandomNumFact />
          </Route>
          <Route path="gutenberg-api/have-a-laugh" exact>
            <JokeApi />
          </Route> */}
        </Switch>
      </Router>
    </>
  );
};

export default App;
