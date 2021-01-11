import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";

import "../style/Landingpage.css";

const title = "Gutenberg's API Central";

const Landingpage = () => {
  return (
    <>
      <Header title={title} />
      <div className="links-con">
        <div className="love-tab-con">
          <h1>The Matchmaker</h1>
          <Link to="/love">
            <div className="love-btn-con">
              <i class="far fa-grin-hearts"></i>
            </div>
          </Link>
        </div>
        <div className="dice-tab-con">
          <h1>Roll The Dice</h1>
          <Link to="/generate-fun-fact">
            <div className="love-btn-con">
              <i class="fas fa-dice"></i>
            </div>
          </Link>
        </div>
        <div className="laugh-tab-con">
          <h1>Have A Laugh</h1>

          <Link to="/have-a-laugh">
            <div className="love-btn-con">
              <i class="far fa-grin-squint"></i>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Landingpage;
