import React from 'react'

import './style.css'


const GamersLogo = ({ logoBlue }) => {
  // /assets/images/img-bg.png
  const pathImage = "/assets/images/"

  return (
    <div className='logo__gamers__main '>
      {logoBlue ?
        <div className='logo__contain logo__contain__blue--pading  '>
          <img src={`${pathImage}logo-blue.svg`} alt="logo-blue" className='img__logo__blue' />
          <p className='p__blue' >Gamers</p>
        </div>
        :
        <div className="logo__contain logo__contain__white--pading">
          <img src={`${pathImage}logo-white.svg`} alt="logo-white" className='img__logo__white' />
          <p className='p__white'>Gamers</p>
        </div>
      }
    </div>
  )
}

export default GamersLogo