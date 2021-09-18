import React from 'react'

function InputField({ guess, board = false }) {
    return (
        <input 
            className={board ? 'guess-input has-color' : 'guess-input'}
            readOnly={true}
            value={board ? '????' : guess}
        />
    )
}

export default InputField
