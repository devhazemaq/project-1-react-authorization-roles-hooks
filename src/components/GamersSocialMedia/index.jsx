import React from 'react'

import './style.css';

const GamersSocialMedia = () => {

  const pathImage = "/assets/images/";

  return (

    <div className='gamerssocialmedia__main'>
      <div className='soch__cont' >
        <img src={`${pathImage}soch-google.svg`} alt="soch-google" />
      </div>
      <div className='soch__cont' >
        <img src={`${pathImage}soch-twitter.svg`} alt="soch-twitter" />
      </div>
      <div className='soch__cont' >
        <img src={`${pathImage}soch-linkedin.svg`} alt="soch-linkedin" />
      </div>
      <div className='soch__cont' >
        <img src={`${pathImage}soch-github.svg`} alt="soch-github" />
      </div>
    </div>
  )
};

export default GamersSocialMedia;