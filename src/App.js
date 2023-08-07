import React, { useState } from 'react';
import './App.css';
import Score from './components/Score';
import Solution from './components/Solution';
import Letters from './components/Letters';
import EndGame from './components/EndGame'



const App = function() {

  const problems = [
    {word: "beer", hint: "Traditional German drink."},
    {word: "solution", hint: "A liquid mixture."},
    {word: "promise", hint: "Make a vow."},
    {word: "startup", hint: "A new business venture."},
    {word: "javascript", hint: "Language used by website developers."},
    {word: "elevation", hint: "Altitude of a place."}
  ]

  const [letterStatus, setLetterStatus] = useState(generateLetterStatus(false))
  const [score, setScore] = useState(100)
  const [solution, setSolution] = useState(pickSolution())
  const [gameOver, setGameOver] = useState(false)

  function pickSolution() {
    let randomNumber = Math.floor(Math.random() * problems.length)
    let solution = problems[randomNumber]
    return solution
  }

  function generateLetterStatus(statusValue) {
    let status = {}
    for (let i = 97; i <= 122; i++) {
      status[String.fromCharCode(i)] = statusValue
    }
    console.log(status)
    return status
  }

  function selectLetter(letter) {
    let newLetterStatus = {...letterStatus}
    newLetterStatus[letter] = true
    setLetterStatus(newLetterStatus)
    checkGuessed(newLetterStatus)
    updateScore(letter)
  }

  function checkGuessed(status) {
    if (solution.word.split("").every(l => status[l])) {
      gameFinished()
    }    
  }

  function gameFinished() {
    let newLetterStatus = generateLetterStatus(true)
    setLetterStatus(newLetterStatus)
    setGameOver(true)
  }

  function updateScore(letter) {
    let newScore = score
    if (solution.word.includes(letter)) {
      newScore += 5
    } else {
      newScore -= 20
    }
    setScore(newScore)
    if (newScore <= 0) {
      gameFinished()
    }
  }

  function restartGame() {
    let newLetterStatus = generateLetterStatus(false)
    setLetterStatus(newLetterStatus)
    setScore(100)
    setGameOver(false)
    setSolution(pickSolution())
  }
  
  return (
    <div className="App">
      <h1>Hangman by Boris Kimel</h1>
      <Score score={score} />
      <Solution solution={solution} letters={letterStatus} />
      <Letters letters={letterStatus} check={selectLetter}/>
      {gameOver ? <EndGame score={score} solution={solution.word} restart={restartGame} /> : "" }
    </div>
  );
}

export default App;
