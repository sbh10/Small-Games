import React, { useState } from "react";
import "./Converter.css";

const Converter = () => {
  // États pour gérer les entrées et les résultats
  const [amount, setAmount] = useState("");
  const [convertedAmount, setConvertedAmount] = useState("");
  const [selectedCurrency, setSelectedCurrency] = useState("Convert");
  const [hasConverted, setHasConverted] = useState(false);
  const [displayAmount, setDisplayAmount] = useState("");

  // Fonction de calcul (à l’intérieur du composant)
  const calculateResult = (currency) => {
    try {
      const parsed = parseFloat(amount);
      if (isNaN(parsed)) {
        setConvertedAmount("Invalid input");
        setHasConverted(false);
        return;
      }

      let rate = 0;
      if (currency === "TND") rate = 0.3;
      else if (currency === "DZD") rate = 0.0067;
      else if (currency === "LYD") rate = 0.16;
      const result = parsed * rate;
      setConvertedAmount(`${result.toFixed(2)} EUR`);
      setSelectedCurrency(currency); // Mettre à jour le bouton avec la devise sélectionnée
      setDisplayAmount(amount);
      setHasConverted(true);
    } catch (error) {
      console.error("Conversion error:", error);
      setConvertedAmount("Error");
      setHasConverted(false);
    }
  };

  return (
    <div className="converter-container">
      <h1>CONVERT TO EUR</h1>
      <input
        type="text"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Amount"
        id="sum"
      />

      <div className="dropdown">
        <button className="dropbtn">CONVERT</button>

        <div className="dropdown-content">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              calculateResult("TND");
            }}
          >
            TND
          </a>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              calculateResult("DZD");
            }}
          >
            DZD
          </a>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              calculateResult("LYD");
            }}
          >
            LYD
          </a>
        </div>
      </div>

      <p className="converted-text">
        {hasConverted
          ? `${displayAmount} ${selectedCurrency} amount to ${convertedAmount}`
          : "Enter a value and select a currency"}
      </p>
    </div>
  );
};

export default Converter;
