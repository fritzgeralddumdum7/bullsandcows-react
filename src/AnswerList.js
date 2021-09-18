import React from 'react'
import AnswerListItem from './components/AnswerListItem'

function AnswerList({ answers }) {
    return (
        <div className="information-board">
            {
                answers.map(({ guess, bull, cow }, index) => {
                    return <AnswerListItem 
                        key={index}
                        guess={guess}
                        bull={bull}
                        cow={cow}
                    />
                })
            }
        </div>
    )
}

export default AnswerList
