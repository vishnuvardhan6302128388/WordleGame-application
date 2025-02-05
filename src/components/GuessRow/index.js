import React from 'react'

const GuessRow = ({guess, feedback}) => (
  <div className="guess-row">
    {guess.split('').map((letter, index) => (
      <div key={index} className={`letter ${feedback[index]}`}>
        {letter}
      </div>
    ))}
  </div>
)

export default GuessRow
