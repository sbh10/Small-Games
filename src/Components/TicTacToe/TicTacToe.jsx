import React, { useState, useEffect } from "react";
import "./TicTacToe.css";

const WIN_CONDITIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

export default function TicTacToe() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [playerTurn, setPlayerTurn] = useState("X");
  const [message, setMessage] = useState("Your turn 🫵!");
  const [gameOver, setGameOver] = useState(false);

  const checkWin = (board, player) => {
    return WIN_CONDITIONS.some((condition) =>
      condition.every((index) => board[index] === player)
    );
  };

  const isBoardFull = (board) => {
    return board.every((cell) => cell !== null);
  };

  const handleClick = (index) => {
    if (gameOver || board[index] !== null) return;
    const newBoard = board.slice();
    newBoard[index] = playerTurn;
    setBoard(newBoard);

    if (checkWin(newBoard, playerTurn)) {
      setMessage("You win! 🎉");
      setGameOver(true);
      return;
    }

    if (isBoardFull(newBoard)) {
      setMessage("It's a tie! 😒");
      setGameOver(true);
      return;
    }

    setPlayerTurn("O");
    setMessage("Wait for your turn...");
  };

  useEffect(() => {
    if (playerTurn === "O" && !gameOver) {
      const timer = setTimeout(() => {
        const emptyIndexes = board
          .map((cell, idx) => (cell === null ? idx : null))
          .filter((idx) => idx !== null);

        if (emptyIndexes.length === 0) return;

        const randomIndex =
          emptyIndexes[Math.floor(Math.random() * emptyIndexes.length)];
        const newBoard = board.slice();
        newBoard[randomIndex] = "O";
        setBoard(newBoard);

        if (checkWin(newBoard, "O")) {
          setMessage("You lost 😞");
          setGameOver(true);
          return;
        }

        if (isBoardFull(newBoard)) {
          setMessage("It's a tie! 😒");
          setGameOver(true);
          return;
        }

        setPlayerTurn("X");
        setMessage("Your turn 🫵!");
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [playerTurn, board, gameOver]);

  const restartGame = () => {
    setBoard(Array(9).fill(null));
    setPlayerTurn("X");
    setMessage("Start the game! 🤩");
    setGameOver(false);
  };

  return (
    <div className="game-container">
      <h1>TIC TAC TOE</h1>

      <div className="board">
        {board.map((cell, idx) => (
          <button
            key={idx}
            onClick={() => handleClick(idx)}
            disabled={gameOver || cell !== null}
            className={`cell ${
              cell === "X" ? "player-x" : cell === "O" ? "player-o" : ""
            }`}
          >
            {cell}
          </button>
        ))}
      </div>

      <p className="message">{message}</p>

      <button onClick={restartGame} className="restart-btn">
        START
      </button>
    </div>
  );
}
