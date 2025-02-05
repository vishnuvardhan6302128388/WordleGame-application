import React, {useState} from 'react'

const GuessInput = ({onSubmit}) => {
  const [guess, setGuess] = useState('')

  const handleChange = e => {
    setGuess(e.target.value.toLowerCase())
  }

  const handleSubmit = e => {
    e.preventDefault()
    onSubmit(guess)
    setGuess('') // Reset the input after submission
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        maxLength={5}
        value={guess}
        onChange={handleChange}
        placeholder="Enter a 5-letter word"
      />
      <button type="submit">Submit Guess</button>
    </form>
  )
}

export default GuessInput
