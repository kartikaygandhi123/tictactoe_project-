import React from 'react';

function Square(props) {
  return (
    <button type="button" className="square">
      {props.value}
    </button>
  );
}

export default Square;
