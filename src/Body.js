import image from "../images/icon-x.png";
import image2 from "../images/icon-o.png";
import { Link } from "react-router-dom";
import Gameboard from "./Gameboard";
import React from "react";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Body = () => {
  const [activeButton, setActiveButton] = useState("X");

  const leftClick = () => {
    setActiveButton("X");
  };

  const rightClick = () => {
    setActiveButton("O");
  };

  const notify = () => toast("Invite Link Copied.");
  return (
    <div className="body">
      <div className="logo-section">
        <img src={image} alt="x-logo" />
        <img src={image2} alt="-o-logo" />
      </div>
      <div className="game-selector">
        <h1>PICK PLAYER</h1>
        <div className="game-btn">
          <button
            className={`toggle-btn btn-x ${
              activeButton === "X" ? "active" : ""
            }`}
            onClick={leftClick}
          >
            X
          </button>
          <button
            className={`toggle-btn btn-o ${
              activeButton === "O" ? "active" : ""
            }`}
            onClick={rightClick}
          >
            O
          </button>
        </div>
      </div>
      <div className="game-options">
        <Link to="/gameboard">
          <button className="cpu-gamebtn"> NEW GAME ( VS CPU )</button>
        </Link>
        <button className="player-gamebtn">
          NEW GAME ( VS HUMAN ) <span>Coming Soon</span>{" "}
        </button>
      </div>
      <div className="invite-option">
        <button className="invite-btn" onClick={notify}>
          INVITE YOUR FRIEND
        </button>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </div>
    </div>
  );
};

export default Body;
