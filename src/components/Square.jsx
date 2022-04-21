import React from 'react';

function Square({ value, onClick, isWinningSquare }) {
  //we can also use:Square(props) but we have to use then as: props.value
  return (
    <button
      type="button"
      className="square"
      onClick={onClick}
      style={{ fontWeight: isWinningSquare ? 'bold' : 'normal' }}
    >
      {value}
    </button>
  );
}

export default Square;
