import React, {useState} from 'react'
import GameBoard from './components/GameBoard'
import ResultMessage from './components/ResultMessage'
import GuessInput from './components/GuessInput'
import './App.css'

const correctWord = 'apple' // This can be dynamic or come from an API.

const App = () => {
  const [guessedWords, setGuessedWords] = useState([])
  const [attemptsRemaining, setAttemptsRemaining] = useState(6)
  const [gameStatus, setGameStatus] = useState('') // "won", "lost", or ""
  const [word, setWord] = useState('')

  const handleGuess = guess => {
    if (guess.length !== 5 || !/^[a-zA-Z]+$/.test(guess)) {
      alert('Please enter a valid 5-letter word.')
      return
    }

    const feedback = getFeedback(guess)
    setGuessedWords([...guessedWords, {guess, feedback}])

    if (guess === correctWord) {
      setGameStatus('won')
    } else {
      setAttemptsRemaining(attemptsRemaining - 1)
      if (attemptsRemaining - 1 === 0) {
        setGameStatus('lost')
      }
    }
  }

  const getFeedback = guess => {
    const feedback = []
    for (let i = 0; i < 5; i++) {
      if (guess[i] === correctWord[i]) {
        feedback.push('green')
      } else if (correctWord.includes(guess[i])) {
        feedback.push('yellow')
      } else {
        feedback.push('gray')
      }
    }
    return feedback
  }

  const handleNewGame = () => {
    setGuessedWords([])
    setAttemptsRemaining(6)
    setGameStatus('')
  }

  return (
    <div className="App">
      <h1 className="main-head">Wordle-like game</h1>
      <GameBoard guesses={guessedWords} attemptsRemaining={attemptsRemaining} />
      <ResultMessage gameStatus={gameStatus} onNewGame={handleNewGame} />
      {gameStatus === '' && <GuessInput onSubmit={handleGuess} />}
    </div>
  )
}

export default App
