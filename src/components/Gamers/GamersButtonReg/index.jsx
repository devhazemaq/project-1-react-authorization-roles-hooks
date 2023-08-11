import React from 'react'
import './style.css'

const GamersButtonReg = ({ btnText, btnLoginWhite, type='button' }) => {
  return (
    (btnLoginWhite ? 
      (<button className='gamers__btn  gamers__btn--white' type={type} >{btnText}</button>) 
      : 
      (<button className='gamers__btn'  type={type} >{btnText}</button>))

  )
}

export default GamersButtonReg