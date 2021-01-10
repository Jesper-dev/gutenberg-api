import React from "react";

import Landingpage from "./components/Landingpage";
import { HashRouter, Route, Link } from "react-router-dom";

import "./style/styles.css";
import LoveApi from "./components/apis/LoveApi";
import RandomNumFact from "./components/apis/RandomNumFact";
import JokeApi from "./components/apis/JokeApi";

// import Route from "./components/Route";

const App = () => {
  return (
    <>
      <HashRouter basename={process.env.PUBLIC_URL}>
        <Link to="/love"></Link>
        <Link to="/generate-fun-fact"></Link>
        <Link to="/have-a-laugh"></Link>

        <Route exact path="/" component={Landingpage} />
        <Route exact path="/love/" component={LoveApi} />
        <Route path="/generate-fun-fact/" component={RandomNumFact} />
        <Route path="/have-a-laugh/" component={JokeApi} />
      </HashRouter>
    </>
  );
};

export default App;
