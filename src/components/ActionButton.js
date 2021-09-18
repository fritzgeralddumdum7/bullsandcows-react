import React from 'react'

function ActionButton({ actionListener, text, customClass }) {
    return <button className={customClass ? customClass : ''} onClick={actionListener}>{text}</button>
}

export default ActionButton
