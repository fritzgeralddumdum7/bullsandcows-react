import React, { useEffect, useState } from 'react'
import Keypad from './Keypad'
import InputField from './components/InputField'
import ActionButton from './components/ActionButton'
import AnswerList from './AnswerList'

import './App.css'

function App() {
  const [random, setRandom] = useState(0)
  const [guess, setGuess] = useState('')
  const [errorMsg, setErrorMsg] = useState('')
  const [isValid, setIsValid] = useState(true)
  const [isBoard, setIsBoard] = useState(true)
  const [answers, setAnswers] = useState([])

  const keypadClick = (number) => {
    if (guess.length < 4) {
      setGuess(prevState => prevState += number.toString())
    } else {
      setIsValid(true) 
    }
  }

  const backspace = () => {
    setGuess(guess.slice(0, -1))
    setIsValid(false)
  }

  const clear = () => {
    setGuess('')
    setIsValid(false)
  }

  const ErrorMessage = () => {
    return <p className="error">{errorMsg}</p>
  }

  const BoardInfo = () => {
    return (
      <div className="labels">
        <p>Guess: {answers.length}</p>
        <p>Bulls</p>
        <p>Cows</p>
      </div>
    )
  }

  const submitGuess = () => {
    setIsValid(false)
    if (guess.length < 4) {
      return setErrorMsg('Invalid guess, 4 digit required.')
    } else if (!guess.trim()) {
      return setErrorMsg('Please enter your guess.')
    } 

    const result = validateGuess(random.toString())

    if (answers.length === 0) {
      setAnswers([result])
    } else {
      setAnswers(answer => [...answer, result])
    }

    if (result.bull === 4) {
      return setIsBoard(false)
    }

    setIsValid(true)
    setGuess('')
  }
  
  const validateGuess = (toBeGuessed) => {
    let ctrBull = 0
    let ctrCow = 0

    for (let i = 0; i < toBeGuessed.length; i++) {
      if (guess.includes(toBeGuessed[i]) && toBeGuessed[i] === guess[i]) {
        ctrBull++
      } else if (guess.includes(toBeGuessed[i])) {
        ctrCow++
      }
    }

    return {
      guess: guess,
      cow: ctrCow,
      bull: ctrBull
    }
  }

  useEffect(() => {
    const isValidCombination = () => {
      const generate = Math.floor(1000 + Math.random() * 9000)
  
      if (!/(.).*?\1/.test(generate)) {
        return generate
      } 
      return isValidCombination()
    }

    setRandom(isValidCombination)
  }, [])
  
  return (
    <div className="container">
      <div>
        <InputField 
          board={isBoard} 
          guess={guess} 
        />
        <InputField 
          guess={guess} 
        />
        { !isValid && <ErrorMessage /> }
        <div className="keypad-container">
          <Keypad 
            keypadClick={keypadClick} 
          />
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
        <BoardInfo />
        <AnswerList answers={answers} />
      </div>
    </div>
  ) 
}

export default App
