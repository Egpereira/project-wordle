import React from 'react'

function GuessInput() {
  const [guess, setGuess] = React.useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log({ guess })
    setGuess('')
  }

  return (
    <form className='guess-input-wrapper' onSubmit={handleSubmit}>
      <label htmlFor='guess-input'>Enter guess:</label>
      <input
        required
        id='guess-input'
        type='text'
        value={guess}
        pattern='[a-zA-Z]{5}'
        title='5 letter word'
        maxLength={5}
        onChange={(e) => setGuess(e.target.value.toUpperCase())}
      />
    </form>
  )
}

export default GuessInput
