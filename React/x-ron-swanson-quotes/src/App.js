import React from "react";
import './App.css'
import { Quotes } from "./Quotes";

function App() {
  return (
    <div className="App">
      <h1>
        <a href="/instructions.html"> instructions </a>
      </h1>
      <img
        src="https://media.giphy.com/media/tSVnUxoWoHC/giphy.gif"
        alt="ron"
      />
      <p>QUOTE</p>
      <Quotes />
    </div>
  );
}

export default App;
