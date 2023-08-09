import React from 'react'

import './style.css'

const MostTrophy = () => {
  const pathImagePlayed = "/assets/images/trophy/"; 
  return (
    <>
      <div className='mosttrophy__main'>
        <img src={`${pathImagePlayed}bg.png`} alt="bgTrophy" className='img__trophy'  />
        <img src={`${pathImagePlayed}cup-outline.png`} alt="bgTrophy" className='img__trophy_kkk'  />
        <img src={`${pathImagePlayed}cup.png`} alt="bgTrophy" className='img__trophy_kkk img__trophy_kkk2 '  />

      </div>
      <div className='mosttrophy_misleadingtext'>
        <p className='misle1'>assassin's creed odyssey </p>
        <p className='misle2'>last played: 34 hours ago</p>
      </div>
    </>

    // <div className='mosttrophy__main'>
    //   <img src={`${pathImagePlayed}bg.png`} alt="bgTrophy" className='img__trophy'  />
    // </div>
  )
};

export default MostTrophy;