import React from 'react'
import './style.css'

const GamersButtonReg = ({ btnText, btnLoginWhite }) => {
  return (
    (btnLoginWhite ? 
      (<button className='gamers__btn  gamers__btn--white '>{btnText}</button>) 
      : 
      (<button className='gamers__btn'>{btnText}</button>))

  )
}

export default GamersButtonReg