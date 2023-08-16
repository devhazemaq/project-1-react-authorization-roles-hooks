import React from 'react'
import './style.css'

const GamersButtonReg = ({ btnText, btnLoginWhite, type='button', btnMarg='' }) => {
  return (
    (btnLoginWhite ? 
      (<button className={` gamers__btn gamers__btn--white  ${btnMarg}`} type={type} >{btnText}</button>) 
      : 
      (<button className={` gamers__btn ${btnMarg}`}  type={type} >{btnText}</button>))
      
  )
}

export default GamersButtonReg