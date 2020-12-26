import React, { useState } from "react";
import Square from "./Square";

const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const judgeTheWinner = () => {
    // 一方向のマスの値が全て同じ値で揃えたユーザーの勝ち
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
    for (const line of lines) {
      const [first, second, third] = line;
      if (
        squares[first] &&
        squares[first] === squares[second] &&
        squares[first] === squares[third]
      ) {
        return squares[first];
      }
    }
    return null;
  };
  const turnChange = () => {
    setXIsNext(!xIsNext);
  };
  const handleClick = (index) => {
    const s = squares.slice();
    // すでに値が入力されている場合には何もしない
    if (s[index]) {
      return;
    }
    // 勝者が確定している場合には、何もしない
    if (judgeTheWinner()) {
      return;
    }
    s[index] = xIsNext ? "X" : "O";
    setSquares(s);
    turnChange();
  };
  const status = judgeTheWinner()
    ? "Winner: " + judgeTheWinner()
    : "Next Player: " + (xIsNext ? "X" : "O");
  const renderSquare = (index) => {
    return <Square value={squares[index]} onClick={() => handleClick(index)} />;
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
