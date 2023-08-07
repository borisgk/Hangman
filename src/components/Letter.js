import React from "react"

function Letter(props) {
    return (
        props.available ? 
            <button className="letter" onClick={() => props.check(props.letter)}>{props.letter}</button>
        :
            <button className="letter letter-disabled" disabled>{props.letter}</button>
    )
}

export default Letter