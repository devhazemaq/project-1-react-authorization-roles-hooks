import React from 'react'

import GamersLogo from '../../components/Gamers/GamersLogo'
import GamersInfo from '../../components/Gamers/GamersInfo'

import './style.css'
import GamersTextLogin from '../../components/Gamers/GamersTextLogin';
import GamersSocialMedia from '../../components/Gamers/GamersSocialMedia';
import GamersForm from '../../components/Gamers/GamersForm';
import { INPUTS_LOGIN } from '../../constants';
import GamersButtonReg from '../../components/Gamers/GamersButtonReg';
import GamersNoAccount from '../../components/Gamers/GamersNoAccount';

const LoginPage = () => {
  
  const pathImage = "/assets/images/";

  return (
    <div className='login__main'>
      <div className='login__left'>
        <GamersLogo logoBlue  />  {/*logoBlue*/}
        <GamersInfo infoGray /> {/*infoGray*/}
        <img src={`${pathImage}img-control.png`} alt="img-control" className='img__control'  />

      </div>
      <div className='login__right'>

        <GamersTextLogin />

        <GamersSocialMedia />
        
        <GamersForm inputs__array={INPUTS_LOGIN} />

        <GamersButtonReg btnText="Register Account" />
        
        <GamersNoAccount />
      </div> 
    </div>
  )
};

export default LoginPage;