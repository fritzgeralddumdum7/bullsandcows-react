import React from 'react'
import KeyButton from './components/KeyButton'

function Keypad({ keypadClick }) {
    return (
        <>
            <KeyButton 
                keypadClick={keypadClick}
                number={1}
            />
            <KeyButton 
                keypadClick={keypadClick}
                number={2}
            />
            <KeyButton 
                keypadClick={keypadClick}
                number={3}
            />
            <KeyButton 
                keypadClick={keypadClick}
                number={4}
            />
            <KeyButton 
                keypadClick={keypadClick}
                number={5}
            />
            <KeyButton 
                keypadClick={keypadClick}
                number={6}
            />
            <KeyButton 
                keypadClick={keypadClick}
                number={7}
            />
            <KeyButton 
                keypadClick={keypadClick}
                number={8}
            />
            <KeyButton 
                keypadClick={keypadClick}
                number={9}
            />
            <KeyButton 
                keypadClick={keypadClick}
                number={0}
            />
        </>
    )
}

export default Keypad
