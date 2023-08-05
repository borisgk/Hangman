import React from "react"
import Letter from "./Letter"

function Letters(props) {

    return (
        <div>
            <p>Available letters:</p>
            <p>{props.letters.map(l => <Letter letter={l} />)}</p>
        </div>
    )

}

export default Letters