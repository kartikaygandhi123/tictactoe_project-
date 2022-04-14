import React from 'react';

function Square({ value, onClick }) {
  //we can also use:Square(props) but we have to use then as: props.value
  return (
    <button type="button" className="square" onClick={onClick}>
      {value}
    </button>
  );
}

export default Square;
