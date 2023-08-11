import React, { useEffect, useState } from 'react'

import './style.css';
import useAuth from '../hooks/useAuth';


const UserAccount = () => {

  const {user} = useAuth();
  

  const pathImage = "/assets/images/";
  
  

  return (
    <div className='useracc__main'>
      <div className="useracc__welcome">
        <p >Welcme back,</p>
        <p >{user?.name || 'user'}!</p>
      </div>
      <img src={`${pathImage}profile_img.png`} alt="profile_img" className='profile__img'  />
    </div>
  )
};

export default UserAccount;