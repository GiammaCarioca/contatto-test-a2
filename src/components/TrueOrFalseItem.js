import { useState } from 'react'

const TrueOrFalseItem = ({ text, name }) => {
  const [answer, setAnswer] = useState('')
  return (
    <div>
      <span>{text}</span>
      <label htmlFor='true'>Vero</label>
      <input
        onChange={(e) => setAnswer(e.target.value)}
        type='radio'
        name={name}
        value='vero'
        id='true'
      />
      <label htmlFor='false'>Falso</label>
      <input
        onChange={(e) => setAnswer(e.target.value)}
        type='radio'
        name={name}
        value='falso'
        id='false'
      />
      <span>Risposta: {answer}</span>
    </div>
  )
}

export default TrueOrFalseItem
