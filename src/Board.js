import React, { useState } from "react";
import Square from "./Square";

const Board = () => {
  const [square, setSquare] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const status = "Next Player: " + (xIsNext ? "X" : "O");
  const turnChange = () => {
    setXIsNext(!xIsNext);
  };
  const handleClick = (index) => {
    const s = square.slice();
    s[index] = xIsNext ? "X" : "O";
    setSquare(s);
    turnChange();
  };
  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square value={square[0]} onClick={() => handleClick(0)} />
        <Square value={square[1]} onClick={() => handleClick(1)} />
        <Square value={square[2]} onClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={square[3]} onClick={() => handleClick(3)} />
        <Square value={square[4]} onClick={() => handleClick(4)} />
        <Square value={square[5]} onClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={square[6]} onClick={() => handleClick(6)} />
        <Square value={square[7]} onClick={() => handleClick(7)} />
        <Square value={square[8]} onClick={() => handleClick(8)} />
      </div>
    </>
  );
};

export default Board;
