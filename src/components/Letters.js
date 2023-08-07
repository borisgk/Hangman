import React from "react"
import Letter from "./Letter"

function Letters(props) {

    return (
        <div>
            <p>Available letters:</p>
            <p>{props.letters.map(l => <Letter letter={l.symbol} available={l.available} check={props.check}/>)}</p>
        </div>
    )

}

export default Letters