import React, { useEffect, useState } from 'react'
import Keypad from './Keypad'
import InputField from './components/InputField'
import ActionButton from './components/ActionButton'
import AnswerList from './AnswerList'

import './App.css'

function App() {
  const [random, setRandom] = useState(0)
  const [cowCtr, setCowCtr] = useState(0)
  const [bullCtr, setBullCtr] = useState(0)
  const [guess, setGuess] = useState('')
  const [isMax, setIsMax] = useState(false)
  const [answers, setAnswers] = useState([])

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

  const keypadClick = (number) => {
    if (guess.length < 4) {
      setGuess(prevState => prevState += number.toString())
    } else {
      setIsMax(true) 
    }
  }

  const backspace = () => {
    setGuess(guess.slice(0, -1))
    setIsMax(false)
  }

  const clear = () => {
    setGuess('')
  }

  const ErrorMessage = () => {
    return <p>Maximum of 4 digits only.</p>
  }

  const BoardInfo = ({ score }) => {
    return (
      <div className="labels">
        <p>Guess: {score}</p>
        <p>Bulls</p>
        <p>Cows</p>
      </div>
    )
  }

  const submitGuess = () => {
    const toBeGuessed = random.toString()
    let ctrCow = 0
    let ctrBull = 0

    for (let i = 0; i < toBeGuessed.length; i++) {
      if (guess.includes(toBeGuessed[i]) && toBeGuessed[i] === guess[i]) {
        ctrBull++
      } else if (guess.includes(toBeGuessed[i])) {
        ctrCow++
      }
    }
    
    setBullCtr(ctrBull)
    setCowCtr(ctrCow)

    if (answers.length === 0) {
      setAnswers([{
        guess: guess,
        cow: cowCtr,
        bull: bullCtr
      }])
    } else {
      setAnswers(answer => [...answer, {
        guess: guess,
        cow: cowCtr,
        bull: bullCtr
      }])
    }

    setIsMax(false)
    setGuess('')
  }

  return (
    <div className="container">
      <div>
        <InputField board={true} guess={guess} />
        <InputField guess={guess} />
        { isMax && <ErrorMessage /> }
        <div className="keypad-container">
          <Keypad keypadClick={keypadClick} />
          <ActionButton 
            text="Clear" 
            actionListener={clear}
          />
          <ActionButton 
            text="Back" 
            actionListener={backspace}
          />
          <ActionButton 
            text="Guess" 
            actionListener={submitGuess}
            customClass="guess"
          />
        </div>
      </div>
      <div>
        <BoardInfo 
          label="Guess"
          score={answers.length} 
        />
        <AnswerList answers={answers} />
      </div>
    </div>
  ) 
}

export default App
