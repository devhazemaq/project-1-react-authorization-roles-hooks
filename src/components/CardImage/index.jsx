import React from 'react'

import "./style.css";

const CardImage = ({imgMain, imgMainInner, direction='' }) => {


  return (
    <div className='cardimage__main'>
      <img src={imgMain} alt="game1" className='game1' />
      <img src={imgMainInner} alt="game1-inner" className={direction || 'game1-inner' } />

    </div>
  )
}; 

export default CardImage;