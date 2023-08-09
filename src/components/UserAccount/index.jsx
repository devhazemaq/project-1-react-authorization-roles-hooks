import React from 'react'

import './style.css';

const UserAccount = () => {

  const pathImage = "/assets/images/";

  return (
    <div className='useracc__main'>
      <div className="useracc__welcome">
        <p >Welcme back,</p>
        <p >Jenny!</p>
      </div>
      <img src={`${pathImage}profile_img.png`} alt="profile_img" className='profile__img'  />
    </div>
  )
};

export default UserAccount;