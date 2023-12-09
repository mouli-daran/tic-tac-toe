import React from "react";
import { Link } from "react-router-dom";

const Result = ({ winner, handleQuitGame, handleNewGame }) => {
  const isPlayerWinner = winner === "X";

  return (
    <div className="win-title">
       <h1> {isPlayerWinner ? "You Won!" : "CPU Won!"} </h1>
      <div className="win-buttons">
        <Link to="/">
          <button className="winBtn quit">QUIT</button>
        </Link>
        <button className="winBtn play-again" onClick={handleNewGame}>
          PLAY AGAIN
        </button>
      </div>
    </div>
  );
};

export default Result;
