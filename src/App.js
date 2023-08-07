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
    letters: [
      {symbol: "a", available: true},
      {symbol: "b", available: true},
      {symbol: "c", available: true},
      {symbol: "d", available: true},
      {symbol: "e", available: true},
      {symbol: "f", available: true},
      {symbol: "g", available: true},
      {symbol: "h", available: true},
      {symbol: "i", available: true},
      {symbol: "j", available: true},
      {symbol: "k", available: true},
      {symbol: "l", available: true},
      {symbol: "m", available: true},
      {symbol: "n", available: true},
      {symbol: "o", available: true},
      {symbol: "p", available: true},
      {symbol: "q", available: true},
      {symbol: "r", available: true},
      {symbol: "s", available: true},
      {symbol: "t", available: true},
      {symbol: "u", available: true},
      {symbol: "v", available: true},
      {symbol: "w", available: true},
      {symbol: "x", available: true},
      {symbol: "y", available: false},
      {symbol: "z", available: true}
    ]})

  function check(letter) {
    let newData = {...appData}
    newData.letters.find(l => l.symbol === letter).available = false
    setAppData(newData)
  }
  
  return (
    <div className="App">
      <h1>Hangman by Boris Kimel</h1>
      <Score score={appData.score} />
      <Solution solution={appData.solution} hint={appData.hint} />
      <Letters letters={appData.letters} check={check}/>
    </div>
  );
}

export default App;
