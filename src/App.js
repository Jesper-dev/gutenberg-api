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
      <Route path="/love">
        <LoveApi />
      </Route>
      <Route path="/generate-fun-fact">
        <RandomNumFact />
      </Route>
      <Route path="/have-a-laugh">
        <JokeApi/>
      </Route>
      
    </>
  );
}

export default App;