import React from 'react'

import GamersLogo from '../../components/GamersLogo'
import GamersInfo from '../../components/GamersInfo'

import './style.css'
import GamersTextLogin from '../../components/GamersTextLogin';
import GamersSocialMedia from '../../components/GamersSocialMedia';
import GamersForm from '../../components/GamersForm';
import { INPUTS_LOGIN } from '../../constants';
import GamersButtonReg from '../../components/GamersButtonReg';
import GamersNoAccount from '../../components/GamersNoAccount';

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