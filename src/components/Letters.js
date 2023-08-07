import React from "react"
import Letter from "./Letter"

function Letters(props) {

    return (
        <div>
            <div className="letters-heading">Letters:</div>
            <div className="letters">{Object.entries(props.letters).map(([key, value]) => <Letter letter={key} disabled={value} check={props.check} />)}</div>
            
        </div>
    )

}

export default Letters