import React from "react";
import PropTypes from "prop-types";

import imagex from "../public/icon-x.png";
import imageo from "../public/icon-o.png";


const Square = ({value , onSquareClick}) => {

  const getImageSource = () => {
    if (value === "X") {
      return imagex;
    } else if (value === "O") {
      return imageo;
    }
    return null;
  };
  
  return (
  
    <div className="square" onClick={onSquareClick}>
    <img src={getImageSource()} alt={value} />
  </div>
  );
};
Square.propTypes = {
  value: PropTypes.string,
  onSquareClick: PropTypes.func,
};

export default Square;
