import React from "react"
import Letter from "./Letter"

function Solution(props) {


    return (
        <div>
            <div className="solution">
                    {props.solution.word.split("").map(s => props.letters[s] ? 
                        <Letter letter={s} disabled={true} />
                        :
                        <Letter letter="_" disabled={true} />    
                    )}
            </div>
            <div className="hint">Hint: {props.solution.hint}</div>
        </div>
    )
}

export default Solution