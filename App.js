import React from "react";
import LoveApi from "./components/apis/LoveApi";
import RandomNumFact from "./components/apis/RandomNumFact";
import Landingpage from './components/Landingpage';


import "./style/styles.css"
import JokeApi from "./components/apis/JokeApi";
import Route from "./components/Route";

const App = () => {
  return (
    <>
      
      <Landingpage />
      <Route path="gutenberg-api/love">
        <LoveApi />
      </Route>
      <Route path="gutenberg-api/generate-fun-fact">
        <RandomNumFact />
      </Route>
      <Route path="gutenberg-api/have-a-laugh">
        <JokeApi/>
      </Route>
      
    </>
  );
}

export default App;