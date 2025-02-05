import React from 'react'
import GuessRow from '../GuessRow'

const GameBoard = ({guesses, attemptsRemaining}) => (
  <div className="game-board">
    {guesses.map((guess, index) => (
      <GuessRow key={index} guess={guess.guess} feedback={guess.feedback} />
    ))}
    <div className="attempts-remaining">
      Attempts Remaining: {attemptsRemaining}
    </div>
  </div>
)

export default GameBoard
