import React from "react";
import "./Navbar.css"; // On importe le CSS

function Navbar({ selectedGame, setSelectedGame }) {
  return (
    <nav className="navbar">
      <div
        className="nav-logo"
        onClick={() => setSelectedGame("all")}
        style={{ cursor: "pointer" }}
      >
        😎Small Games🤩
      </div>
      <ul className="nav-links">
        <li>
          <a
            href="#calculator"
            className={selectedGame === "calculator" ? "active" : ""}
            onClick={(e) => {
              e.preventDefault();
              setSelectedGame("calculator");
            }}
          >
            Calculator
          </a>
        </li>
        <li>
          <a
            href="#guessnumber"
            className={selectedGame === "guessnumber" ? "active" : ""}
            onClick={(e) => {
              e.preventDefault();
              setSelectedGame("guessnumber");
            }}
          >
            Guess the number
          </a>
        </li>
        <li>
          <a
            href="#converter"
            className={selectedGame === "converter" ? "active" : ""}
            onClick={(e) => {
              e.preventDefault();
              setSelectedGame("converter");
            }}
          >
            Currency converter
          </a>
        </li>
        <li>
          <a
            href="#tictactoe"
            className={selectedGame === "tictactoe" ? "active" : ""}
            onClick={(e) => {
              e.preventDefault();
              setSelectedGame("tictactoe");
            }}
          >
            Tic Tac Toe
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
