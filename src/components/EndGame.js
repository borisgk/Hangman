import React from 'react'

export default function EndGame({score, solution, restart}) {
  return (
    <div>
    {score > 0 ? 
        <div className='congrats'>Congratulations!</div>
        :
        <div className='failure'>Try harder. It was <b>"{solution}"</b>.</div>}
        <button className='restart' onClick={() => restart()}>Restart</button>
    </div>
  )
}
