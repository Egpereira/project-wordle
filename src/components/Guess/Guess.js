import React from 'react'

import { range } from '../../utils'
import { checkGuess } from '../../game-helpers'

function Cell({ letter, status }) {
  const className = status ? `cell ${status}` : 'cell'

  return <span className={className}>{letter}</span>
}

function Guess({ value, answer }) {
  const result = checkGuess(value, answer)

  return (
    <p className='guess'>
      {range(5).map((i) => (
        <Cell key={i} letter={result?.[i].letter} status={result?.[i].status} />
      ))}
    </p>
  )
}

export default Guess
