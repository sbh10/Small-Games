import React from "react";
import { useState } from "react";
import "./Calculator.css";

function Calculator() {
  const [screen, setScreen] = useState("");
  const [result, setResult] = useState("");

  const appendToScreen = (value) => {
    setScreen((prev) => prev + value);
  };

  const clearScreen = () => {
    setScreen("");
    setResult("");
  };

  const calculateResult = () => {
    try {
      // Attention : eval() peut être dangereux en production
      // Il est recommandé d'utiliser une librairie de calcul plus sécurisée
      const calculation = eval(screen);
      setResult(calculation.toString());
    } catch {
      setResult("Erreur");
    }
  };

  return (
    <div className="calculator-container">
      <div className="button-container">
        <h1>CALCULATOR</h1>
        <div>
          <button onClick={() => appendToScreen("1")}>1</button>
          <button onClick={() => appendToScreen("2")}>2</button>
          <button onClick={() => appendToScreen("3")}>3</button>
          <button
            onClick={() => appendToScreen("+")}
            style={{ backgroundColor: "#eeaa46" }}
          >
            +
          </button>
        </div>
        <div>
          <button onClick={() => appendToScreen("4")}>4</button>
          <button onClick={() => appendToScreen("5")}>5</button>
          <button onClick={() => appendToScreen("6")}>6</button>
          <button
            onClick={() => appendToScreen("-")}
            style={{ backgroundColor: "#eeaa46" }}
          >
            -
          </button>
        </div>
        <div>
          <button onClick={() => appendToScreen("7")}>7</button>
          <button onClick={() => appendToScreen("8")}>8</button>
          <button onClick={() => appendToScreen("9")}>9</button>
          <button
            onClick={() => appendToScreen("*")}
            style={{ backgroundColor: "#eeaa46" }}
          >
            x
          </button>
        </div>
        <div>
          <button onClick={() => appendToScreen("0")}>0</button>
          <button onClick={clearScreen} style={{ backgroundColor: "#eec346" }}>
            C
          </button>
          <button
            onClick={calculateResult}
            style={{ backgroundColor: "#ee6d46" }}
          >
            =
          </button>
          <button
            onClick={() => appendToScreen("/")}
            style={{ backgroundColor: "#eeaa46" }}
          >
            /
          </button>
        </div>
      </div>

      <div className="display-and-result">
        <h2>Affichage</h2>
        <input type="text" value={screen} readOnly />

        <h2>Résultat</h2>
        <input type="text" value={result} readOnly />
      </div>
    </div>
  );
}

export default Calculator;
