import React from 'react'

import { sample } from '../../utils'
import { WORDS } from '../../data'

import GuessResults from '../GuessResults'
import GuessInput from '../GuessInput'

// Pick a random word on every page load.
const answer = sample(WORDS)
// To make debugging easier, we'll log the solution in the console.
console.info({ answer })

function Game() {
  const [guesses, setGuesses] = React.useState([])

  const handleSubmitGuess = (guess) => {
    setGuesses([...guesses, guess])
  }

  return (
    <>
      <GuessResults guesses={guesses} />
      <GuessInput onSubmit={handleSubmitGuess} />
    </>
  )
}

export default Game
