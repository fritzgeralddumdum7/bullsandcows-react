import React from 'react'

function KeyButton ({ keypadClick, number }) {
    return <button onClick={() => keypadClick(number)}>{number}</button>
}

export default KeyButton
