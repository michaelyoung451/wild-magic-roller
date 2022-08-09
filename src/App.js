import { useState, useEffect } from "react";
import "./App.css";
import table from "./table.json";

function App() {
  const [severity, setSeverity] = useState("Severity");
  const [effect, setEffect] = useState("Effect");

  useEffect(() => {
    console.log(severity);
  }, [severity]);

  const rollEffect = () => {
    const severityRoll = Math.floor(Math.random() * 20) + 1;
    const effectRoll = Math.floor(Math.random() * 100) + 1;
    console.log("Roll: " + severityRoll);
    if (severityRoll <= 3) {
      setSeverity("Extreme");
      setEffect(table["Extreme"][effectRoll]);
    } else if (3 < severityRoll && severityRoll < 10) {
      setSeverity("Moderate");
      setEffect(table["Moderate"][effectRoll]);
    } else if (severityRoll > 9) {
      setSeverity("Nuisance");
      setEffect(table["Nuisance"][effectRoll]);
    }
  };

  return (
    <div className="App">
      <div id="container">
        <h1>Wild Magic Roller</h1>
        <button onClick={rollEffect}>Roll</button>
        <h3>{severity}</h3>
        <p>{effect}</p>
      </div>
    </div>
  );
}

export default App;
