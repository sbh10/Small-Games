import Calculator from "./components/Calculator/Calculator";
import Guess_the_number from "./Components/Guess the number/Guess_the_number";
import Footer from "./Components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <div id="root">
      <div className="components-grid">
        <div className="component-card">
          <Calculator />
        </div>

        <div className="component-card">
          <Guess_the_number />
        </div>

        <div className="component-card">
          {/* Votre 3ème composant ici */}
          <h2>Composant 3</h2>
          <p>À venir...</p>
        </div>

        <div className="component-card">
          {/* Votre 4ème composant ici */}
          <h2>Composant 4</h2>
          <p>À venir...</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
