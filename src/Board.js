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
  const renderSquare = (index) => {
    return <Square value={square[index]} onClick={() => handleClick(index)} />;
  };
  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </>
  );
};

export default Board;
