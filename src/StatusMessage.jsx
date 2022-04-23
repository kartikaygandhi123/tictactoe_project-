import React from 'react';

function StatusMessage({ winner, current }) {
  const noMovesLeft = current.board.every(el => el !== null);

  return (
    <div className="status-message">
      {winner && (
        <>
          Winner is{' '}
          <span className={winner === 'X' ? 'text-green' : 'text-orange'}>
            {winner}
          </span>
        </>
      )}
      {!winner && !noMovesLeft && (
        <>
          Next player is {''}
          <span className={current.isNext ? 'text-green' : 'text-orange'}>
            {current.isNext ? 'X' : 'O'}
            {''}
          </span>
        </>
      )}

      {!winner && noMovesLeft && (
        <>
          <span className="text-green">X </span> and{' '}
          <span className="text-orange">O</span>Tied
        </>
      )}
    </div>
  );
}

export default StatusMessage;
