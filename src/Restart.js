import React from "react";
import { Link } from "react-router-dom";

const Restart = ({ onPlayAgain, onClose }) => {

    const handlePlayAgain = () => {
        onPlayAgain(); 
        onClose();
      };
    
    return (
        <div className="restart-option">
            <h1>Do you want to Quit ?</h1>
            <div className="win-buttons">
                <Link to="/gameboard">
            <button className="winBtn play-again" onClick={handlePlayAgain}>PLAY AGAIN</button>
                </Link>
                    <Link to="/">
            <button className="winBtn quit">QUIT</button>
                    </Link>
            </div>
        </div>
    )
};

export default Restart;