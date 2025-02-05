import React from 'react'

const ResultMessage = ({gameStatus, onNewGame}) =>
  gameStatus && (
    <div className={`result-message ${gameStatus}`}>
      <p>{gameStatus === 'won' ? 'You Win!' : 'Game Over!'}</p>
      <button onClick={onNewGame}>New Game</button>
    </div>
  )

export default ResultMessage
