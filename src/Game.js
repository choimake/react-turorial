import React, { useState } from "react";
import Board from "./Board";

const Game = () => {
  // gameBoardのそれぞれの値
  const [squares, setSquares] = useState(Array(9).fill(null));
  // game進行度合いを示す値
  const [step, setStep] = useState(0);
  // gameの履歴
  const [history, setHistory] = useState([{ squares: Array(9).fill(null) }]);
  // Xのターン判定
  const [xIsNext, setXIsNext] = useState(true);

  const handleClick = (index) => {
    const c = current();
    const s = c.squares.slice();
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
    const h = history.slice(0, step + 1);
    setHistory(h.concat([{ squares: s }]));
    setStep(step + 1);
  };

  const current = () => {
    const h = history.slice(0, step + 1);
    return h[step];
  };

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

  const jumpTo = (move) => {
    setStep(move);
    setXIsNext(step % 2 === 0);
  };

  const moves = history.map((step, move) => {
    const desc = move ? "Go to move #" + move : "Go to game start";
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{desc}</button>
      </li>
    );
  });

  return (
    <div className="game">
      <div className="game-board">
        <Board squares={current().squares} onClick={(i) => handleClick(i)} />
      </div>
      <div className="game-info">
        <div>{status}</div>
        <div>{moves}</div>
      </div>
      <div>{step}</div>
    </div>
  );
};

export default Game;
