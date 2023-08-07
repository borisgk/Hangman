import React from "react"

function Score(props) {

    let scoreClassName = "medium-score"
    if (props.score < 50) {
        scoreClassName = "low-score"
    } else if (props.score >= 80) {
        scoreClassName = "high-score"
    }

    return (
        <div className={`score ${scoreClassName}`}>
            Score: {props.score}
        </div>
    )
}

export default Score