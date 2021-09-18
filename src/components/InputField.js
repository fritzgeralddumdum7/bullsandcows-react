import React from 'react'

function InputField({ guess, board = false }) {
    return (
        <input 
            className="guess-input"
            readOnly={true}
            value={board ? '? ? ? ?' : guess}
        />
    )
}

export default InputField
