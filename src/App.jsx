import Calculator from "./components/Calculator/Calculator";
import Guess_the_number from "./Components/Guess the number/Guess_the_number";
import Footer from "./Components/Footer/Footer";
import "./App.css";
import Converter from "./Components/Converter/Converter";
import Navbar from "./Components/Navbar/Navbar";
import TicTacToe from "./Components/TicTacToe/TicTacToe";
import React, { useState } from "react";

function App() {
  const [selectedGame, setSelectedGame] = useState("all");
  return (
    <div id="root">
      <Navbar selectedGame={selectedGame} setSelectedGame={setSelectedGame} />
      {selectedGame === "all" ? (
        <div className="components-grid">
          <div className="component-card">
            <Calculator />
          </div>
          <div className="component-card">
            <Guess_the_number />
          </div>
          <div className="component-card">
            <Converter />
          </div>
          <div className="component-card">
            <TicTacToe />
          </div>
        </div>
      ) : (
        // Affiche un seul jeu choisi
        <div className="component-card" style={{ marginTop: "2rem" }}>
          {selectedGame === "calculator" && <Calculator />}
          {selectedGame === "guessnumber" && <Guess_the_number />}
          {selectedGame === "converter" && <Converter />}
          {selectedGame === "tictactoe" && <TicTacToe />}
        </div>
      )}
      <Footer />
    </div>
  );
}

export default App;
