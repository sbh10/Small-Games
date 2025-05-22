import React, { useState } from "react";
import "./Guess_the_number.css";

function Guess_the_number() {
  const generateRandomNumber = () => Math.ceil(Math.random() * 10);

  const [numberToGuess, setNumberToGuess] = useState(generateRandomNumber());
  const [message, setMessage] = useState("");
  const [messageColor, setMessageColor] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [attemptsLeft, setAttemptsLeft] = useState(5);
  const [hasWon, setHasWon] = useState(false);

  const handleGuess = () => {
    // si plus d'essais, ne rien faire
    if (attemptsLeft <= 0) {
      setMessage("No attempts left. Game over!");
      setMessageColor("gray");
      return;
    }

    const playerGuess = parseInt(inputValue);

    if (isNaN(playerGuess) || playerGuess < 1 || playerGuess > 10) {
      setMessage("Please enter a number between 1 and 10.");
      setMessageColor("red");
      return;
    }

    if (playerGuess === numberToGuess) {
      setMessage(`Good guess! The number was ${numberToGuess} !`);
      setMessageColor("green");
      setHasWon(true);
    } else {
      setMessage("Wrong number ! Try again.");
      setMessageColor("red");
      setAttemptsLeft((prev) => prev - 1); //décrémentation du compteur
    }
  };
  const resetGame = () => {
    setNumberToGuess(generateRandomNumber());
    setMessage("");
    setMessageColor("");
    setInputValue("");
    setAttemptsLeft(5);
    setHasWon(false);
  };

  const isGameOver = attemptsLeft <= 0;

  return (
    <div className="guess-container">
      <h1>GUESS THE NUMBER</h1>
      <p className="guess-game-rule">Guess the number between 1 and 10</p>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            hasWon || isGameOver ? resetGame() : handleGuess();
          }
        }}
        placeholder="Give it a try!"
        disabled={hasWon || isGameOver} //désactiver input si plus d'essais
      />
      {hasWon || isGameOver ? (
        <button onClick={resetGame} className="btn-ok">
          RESTART
        </button>
      ) : (
        <button onClick={handleGuess} className="btn-ok">
          OK
        </button>
      )}
      <p className="attempts-left">Attempts left: {attemptsLeft}</p>
      <p style={{ color: messageColor }}>{message}</p>
    </div>
  );
}

export default Guess_the_number;
