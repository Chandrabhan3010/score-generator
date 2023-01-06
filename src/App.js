import { useState, useEffect } from "react";
import "./App.css";
import Imgbasketball from "./basketball.gif";

function App() {
  return (
    <>
      <div className="score-keeper-container">
        <img src={Imgbasketball} className="img-basket"></img>
        <h2 className="score-keeper-heading">Basketball score keeper</h2>

        <div className="score-card-container">
        <div className="score-card">
          Team-A
        </div>
        <div className="score-card">
          Team-B
        </div>
        </div>


      </div>
    </>
  );
}

export default App;
