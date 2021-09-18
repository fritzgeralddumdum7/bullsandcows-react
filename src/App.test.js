import { render } from '@testing-library/react'
import App, {
  isUnique,
  generateRandomNumber,
  validateGuess
} from './App'

test('on initial render', () => {
  render(<App />)
})

describe('Random number', () => {
  it('should generate a random number', () => {
    const random = generateRandomNumber()
    expect(random).not.toBe(null)
  })
  it('should be unique', () => {
    const random = generateRandomNumber()
    expect(isUnique(random)).toBe(true)
    expect(isUnique(1234)).toBe(true)
    expect(isUnique(1122)).toBe(false)
  })
  it('should have a 4 digit number', () => {
    const random = generateRandomNumber()
    expect(random.toString().length).toBe(4)
  })
})

describe('Check win validation', () => {
  it('should check possible matches', () => {
    const random = generateRandomNumber()
    const guess = generateRandomNumber()
    const result = validateGuess(random, guess)
    expect(typeof result).toBe('object')
    expect(result.guess && result.cow >= 0 && result.bull >= 0).toBe(true)
  })
})

describe('Verify if validation is correct', () => {
  it('should return 1 bull 2 cows', () => {
    const result = validateGuess('5192', '3159')
    expect(result.bull === 1 && result.cow === 2).toBe(true)
    expect(result.bull).toBe(1)
    expect(result.cow).toBe(2)
  })
  it('should return 0 bull 4 cows', () => {
    const result = validateGuess('8135', '1853')
    expect(result.bull === 0 && result.cow === 4).toBe(true)
    expect(result.bull).toBe(0)
    expect(result.cow).toBe(4)
  })
  it('should return 4 bulls 0 cow', () => {
    const result = validateGuess('1234', '1234')
    expect(result.bull === 4 && result.cow === 0).toBe(true)
    expect(result.bull).toBe(4)
    expect(result.cow).toBe(0)
  })
})
