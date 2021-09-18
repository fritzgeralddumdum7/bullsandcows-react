import { render, screen } from '@testing-library/react'
import App from './App'
const {
  fuckingTest
} = require('./App')

test('on initial render', () => {
  render(<App />)
})

describe('Random number', () => {
  it('every digit is unique', () => {
    expect(fuckingTest(2, 2)).toBe(4)
  })
  it('digit is not unique', () => {
    expect(!/(.).*?\1/.test(1122)).toBe(false)
  })
})

