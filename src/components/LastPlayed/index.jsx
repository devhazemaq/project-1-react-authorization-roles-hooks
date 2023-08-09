import React from 'react'

import './style.css';

const LastPlayed = ({playedImg, playedText, colorShadow}) => {
  
  

  return (
    <div className='lastplayed__main'>
      <img src={playedImg} alt="played1" className={`lastplayed__img ${colorShadow}`} />
      <p className='lastplayed__text'>{playedText}</p>
    </div>
  )
}

export default LastPlayed