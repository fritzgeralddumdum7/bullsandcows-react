import React from 'react'

function AnswerListItem({ guess, bull, cow }) {
    return (
        <div className="answer-container">
            <div className="guess-container">{guess}</div>
            <div className="bull-container">{bull}</div>
            <div className="cow-container">{cow}</div>
        </div>
    )
}

export default AnswerListItem
