import React, { useState } from 'react';
import './App.css';
import Score from './components/Score';
import Solution from './components/Solution';
import Letters from './components/Letters';



const App = function() {

  const [appData, setAppData] = useState({
    score: 100,
    solution: ["_", "_", "_", "_"],
    hint: "What you consider most appropriate at all times.",
    letters: ["a", "b", "c", "d", "e", "f"]
  })
  
  return (
    <div className="App">
      <h1>Hangman by Boris Kimel</h1>
      <Score score={appData.score} />
      <Solution solution={appData.solution} hint={appData.hint} />
      <Letters letters={appData.letters} />
    </div>
  );
}

export default App;
