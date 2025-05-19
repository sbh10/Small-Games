import React, { useState } from "react";
import "./Guess_the_number.css";

function Guess_the_number() {
  const [numberToGuess] = useState(Math.ceil(Math.random() * 10));
  const [message, setMessage] = useState("");
  const [messageColor, setMessageColor] = useState("");
  const [inputValue, setInputValue] = useState("");

  const handleGuess = () => {
    const playerGuess = parseInt(inputValue);

    if (isNaN(playerGuess) || playerGuess < 1 || playerGuess > 10) {
      setMessage("Please enter a number between 1 and 10.");
      setMessageColor("red");
      return;
    }

    if (playerGuess === numberToGuess) {
      setMessage(`Good guess! The number was ${numberToGuess} !`);
      setMessageColor("green");
    } else {
      setMessage("Wrong number ! Try again.");
      setMessageColor("red");
    }
  };

  return (
    <div className="guess-container">
      <h1>GUESS THE NUMBER</h1>
      <p className="guess-game-rule">Guess the number between 1 and 10</p>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Give it a try!"
      />
      <button onClick={handleGuess}>OK</button>
      <p style={{ color: messageColor }}>{message}</p>
    </div>
  );
}

export default Guess_the_number;
