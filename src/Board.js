import React from "react";
import PropTypes from "prop-types";
import Square from "./Square";

const Board = (props) => {
  const renderSquare = (index) => {
    return (
      <Square
        value={props.squares[index]}
        onClick={() => props.onClick(index)}
      />
    );
  };
  return (
    <>
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

Board.propTypes = {
  squares: PropTypes.array,
  onClick: PropTypes.func,
};

export default Board;
