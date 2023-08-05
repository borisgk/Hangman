import React from "react"

function Solution(props) {


    return (
        <div>
            <div className="solution">{props.solution.map(s => `${s} `)}</div>
            <div className="hint">Hint: {props.hint}</div>
        </div>
    )
}

export default Solution