import React from "react";
import { useState } from "react";
import "./Quotes.css";

const Quotes = () => {
  const quotes = [
    "According to my calculations… I have no idea.",
    "The answer lies within you. Deep, deep within. Like, somewhere near your pancreas.",
    "Yes. No. Maybe. I don’t know. Can you repeat the question?",
    "I’d love to explain it, but I left my logic in my other pants.",
    "Ask me again after coffee. Or never. Never also works.",
    "Let me consult the oracle… oh wait, it’s just my cat.",
    "That’s classified information — even I don’t have clearance.",
    "Some say the answer is love. Others say tacos. I choose tacos.",
    "I could tell you… but then we'd both be confused.",
    "Great question! I’ll add it to the list of things I pretend to understand.",
    "That's a great question I'll be sure to ignore it appropriately",
    "In theory yes In practice let’s pretend you never asked",
    "The universe is vast mysterious and still can’t help you with that",
    "Science says no My gut says maybe My cat says feed me",
    "Short answer nope Long answer nooooooooope",
    "That requires thought I’m all out of that today",
    "I consulted my spirit animal It ran away",
    "Let me Google that for you oh wait I’m the Google now",
    "Ah yes the answer is infinity Or possibly spaghetti",
    "I've got answers Just none that make sense",
    "The laws of physics disagree with that but go on",
    "Hold on let me roll a dice for your fate",
    "The voices in my head are still voting",
    "I asked the stars They ghosted me",
    "Sure but only if you believe hard enough Like unicorn-level hard",
  ];

  const [quote, setQuote] = useState("");

  const displayQuote = () => {
    const randomQuote = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomQuote]);
  };

  return (
    <div className="quote-container">
      <h1>A QUOTE TO ANY QUESTION</h1>
      <input
        type="text"
        placeholder="Write your question down"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            displayQuote();
          }
        }}
      />
      <button
        className="quote-btn"
        onClick={displayQuote}
        aria-label="Generate new quote"
      >
        REPLY
      </button>
      {quote && <p id="quote">💡{quote}</p>}
    </div>
  );
};

export default Quotes;
