import React, { 
  useEffect, 
  useState 
} from 'react'

function App() {
  const [random, setRandom] = useState(0)
  const [guess, setGuess] = useState('')
  const [cowCtr, setCowCtr] = useState(0)
  const [bullCtr, setBullCtr] = useState(0)

  const submitGuess = () => {
    const toBeGuessed = random.toString()
    let cowCtr = 0
    let bullCtr = 0

    for (let i = 0; i < toBeGuessed.length; i++) {
      if (guess.includes(toBeGuessed[i]) && toBeGuessed[i] === guess[i]) {
        bullCtr++
      } else if (guess.includes(toBeGuessed[i])) {
        cowCtr++
      }
    }
    
    setBullCtr(bullCtr)
    setCowCtr(cowCtr)
  }

  useEffect(() => {
    // ensure all numbers are unique
    const isValidCombination = () => {
      const generate = Math.floor(1000 + Math.random() * 9000)
  
      if (!/(.).*?\1/.test(generate)) {
        return generate
      } 
      return isValidCombination()
    }

    setRandom(isValidCombination)
  }, [])

  const setMyGuess = (e) => {
    e.preventDefault()

    if (e.target.value.length <= 4) {      
      setGuess(e.target.value)
    } 
  }

  return (
    <div className="container">
      <p>{random}</p>
      <input 
        type="number" 
        value={guess} 
        onChange={setMyGuess} 
        maxLength={4} 
        min={0}
      />
      <button onClick={submitGuess}>Guess</button>
      <p>There are {bullCtr} bull and {cowCtr} cow.</p>
    </div>
  ) 
}

export default App
