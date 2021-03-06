import React from "react";
import PropTypes from "prop-types";

const Square = (props) => {
  return (
    <>
      <button className="square" onClick={props.onClick}>
        {props.value}
      </button>
    </>
  );
};

/**
 * props-typeの機能を使って、propsの型を定義している
 * note: https://zenn.dev/h_yoshikawa0724/articles/2020-09-23-react-proptypes
 */
Square.propTypes = {
  value: PropTypes.string,
  onClick: PropTypes.func,
};

export default Square;
