import React, { useState } from 'react';
import Board from './components/Board';
import './components/styles/root.scss';
import { calculateWinner } from './Helpers';
const App = () => {
  const [board, setBoard] = useState(Array(9).fill(null));

  const [isNext, setisNext] = useState(false);

  const winner = calculateWinner(board);

  const message = winner
    ? `Winner is${winner}`
    : `Next player is ${isNext ? 'X' : 'O'}`;

  const handleSquareClick = position => {
    if (board[position] || winner) {
      return;
    }

    setBoard(prev => {
      return prev.map((square, pos) => {
        if (pos === position) {
          return isNext ? 'X' : 'O';
        }

        return square;
      });
    });

    setisNext(prev => !prev);
  };

  return (
    <div className="app">
      <h1>Tic Tac Toe</h1>
      <h2>{message}</h2>

      <Board board={board} handleSquareClick={handleSquareClick} />
    </div>
  );
};

export default App;
