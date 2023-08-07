import React from "react"

function Letter(props) {
    return (
        props.disabled ? 
            <div className="letter letter-disabled" disabled>{props.letter}</div>
        :
            <div className="letter" onClick={() => letterSelected(props.letter)}>{props.letter}</div>
    )

    function letterSelected(letter) {
        props.check(letter)
    }

}  

export default Letter