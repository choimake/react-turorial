import React, { useState } from "react";
import Board from "./Board";

const Game = () => {
  // gameの履歴
  const [squares, setSquares] = useState(Array(9).fill(null));
  // const [history] = useState([{ squares: Array(9).fill(null) }]);
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

  const status = judgeTheWinner()
    ? "Winner: " + judgeTheWinner()
    : "Next Player: " + (xIsNext ? "X" : "O");
  return (
    <div className="game">
      <div className="game-board">
        <div className="status">{status}</div>
        <Board squares={squares} onClick={(i) => handleClick(i)} />
      </div>
      <div className="game-info"></div>
    </div>
  );
};

export default Game;
