import React from 'react'

function GuessInput({ onSubmit }) {
  const [tentativeGuess, setTentativeGuess] = React.useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log({ tentativeGuess })
    onSubmit(tentativeGuess)
    setTentativeGuess('')
  }

  return (
    <form className='guess-input-wrapper' onSubmit={handleSubmit}>
      <label htmlFor='guess-input'>Enter guess:</label>
      <input
        required
        id='guess-input'
        type='text'
        value={tentativeGuess}
        pattern='[a-zA-Z]{5}'
        title='5 letter word'
        maxLength={5}
        onChange={(e) => setTentativeGuess(e.target.value.toUpperCase())}
      />
    </form>
  )
}

export default GuessInput
