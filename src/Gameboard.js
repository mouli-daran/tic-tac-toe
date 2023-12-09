import image from "../images/icon-x.png";
import image2 from "../images/icon-o.png";
import image3 from "../images/icons-redo.png";
import Restart from "./Restart";
import { useState, useEffect } from "react";
import Square from "./Square";
import Result from "./Result";

const Gameboard = () => {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [winner, setWinner] = useState(null);

  const [showNewComponent, setShowNewComponent] = useState(false);
  const [playerScore, setPlayerScore] = useState(0);
  const [cpuScore, setCpuScore] = useState(0);
  const [restartComponent, setRestartComponent] = useState(false);


  const handleImageClick = () => {
    setShowNewComponent(true);
  };

  const handleClose = () => {
    setShowNewComponent(false);
  };
  
  const handlePlayGameAgain = () => {
    setRestartComponent(false);
    setSquares(Array(9).fill(null));

  }

  


  const handlePlayAgain = () => {
    setWinner(null);
    setSquares(Array(9).fill(null));
    setXIsNext(true);
    handleClose();
  };

  useEffect(() => {
    if (!xIsNext && !winner) {
      const cpuMoveTimeout = setTimeout(makeCPUMove, 1000);
      return () => clearTimeout(cpuMoveTimeout);
    }
  }, [xIsNext, winner]);

  const handleClick = (i) => {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }

    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? "X" : "O";
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  };

  const makeCPUMove = () => {
    const winner = calculateWinner(squares);
    if (winner || xIsNext) {
      setRestartComponent(true);
      return;
    }

    const emptySquares = squares
      .map((square, index) => (!square ? index : null))
      .filter((square) => square !== null);

    if (emptySquares.length > 0) {
      const randomIndex = Math.floor(Math.random() * emptySquares.length);
      const currentSquares = squares.slice();
      currentSquares[emptySquares[randomIndex]] = "O";
      setSquares(currentSquares);

      const winner = calculateWinner(currentSquares);
      if (winner) {
        setWinner(winner);
      }

      setXIsNext(!xIsNext);
    }
  };
  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }

    return null;
  };

  useEffect(() => {
    const winner = calculateWinner(squares);
    if (winner === "X") {
      setPlayerScore((prevScore) => prevScore + 1);
    } else if (winner === "O") {
      setCpuScore((prevScore) => prevScore + 1);
    }
  }, [squares]);

  return (
    <div className="gameboard">
      <div className="header">
        <div className="image-area">
          <img src={image} alt="x-logo" />
          <img src={image2} alt="-o-logo" />
        </div>
        <div className="player-display">
          <h2>{`${xIsNext ? "X" : "O"}'s Turn`}</h2>
        </div>
        <div className="redo-btn">
          <img src={image3} alt="" onClick={handleImageClick} />
          {showNewComponent && (
            <div className="popup">
              <Restart onPlayAgain={handlePlayAgain} onClose={handleClose} />
            </div>
          )}
           {restartComponent && (
            <div className="resultPopup">
        <Result
        winner={winner}
        handleNewGame={handlePlayGameAgain}
        />
        </div>
      )}
        </div>
      </div>

      <div className="game-area">
        {squares.map((value, index) => (
          <Square
            key={index}
            value={value}
            onSquareClick={() => handleClick(index)}
          />
        ))}
      </div>

      <div className="score-card">
        <div className="player-score">
          <p>X (YOU)</p>
          <p>{playerScore}</p>
        </div>
        <div className="tie-score">
          <p>TIES</p>
          <p>0</p>
        </div>
        <div className="cpu-score">
          <p>O (CPU)</p>
          <p>{cpuScore}</p>
        </div>
      </div>
     
    </div>
  );
};
export default Gameboard;
