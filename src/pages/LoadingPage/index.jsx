import React from 'react'

import './style.css'

const LoadingPage = () => {
  
  const logoPath = '/assets/images/logo-blue.svg';

  return (
    <div className='loading__contain'>
      <img src={logoPath} alt="logoPath" />
      <span>Gamers</span>
    </div>
  )
}

export default LoadingPage