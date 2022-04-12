import React from 'react';
import Square from './Square';

function Board() {
  return (
    <div>
      <div>
        <Square value={0} />
        <Square value={1} />
        <Square value={3} />
      </div>

      <div>
        <Square value={4} />
        <Square value={5} />
        <Square value={6} />
      </div>

      <div>
        <Square value={7} />
        <Square value={8} />
        <Square value={9} />
      </div>
    </div>
  );
}

export default Board;
