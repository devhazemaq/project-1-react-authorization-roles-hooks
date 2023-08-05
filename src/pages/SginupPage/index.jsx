import React from 'react'
import GamersLogo from '../../components/Gamers/GamersLogo'
import './style.css'
import GamersInfo from '../../components/Gamers/GamersInfo';
import GamersTextRegister from '../../components/Gamers/GamersTextRegister';

import GamersButtonReg from '../../components/Gamers/GamersButtonReg';
import GamersLineOr from '../../components/Gamers/GamersLineOr';
import GamersForm from '../../components/Gamers/GamersForm';
import { INPUTS_REGISTER } from '../../constants/index';



const SginupPage = () => {

  const pathImage = "/assets/images/";
  
  return (
    <div className='sginup__main'>
      <div className='sginup__left'>
        <GamersLogo   />  {/*logoBlue*/}
        <img src={`${pathImage}vecto2.svg`} alt="vecto2" className='img__points'  />
        <GamersInfo  /> {/*infoGray*/}
        <img src={`${pathImage}vector4.svg`} alt="vector4" className='img__shape'  />
        <img src={`${pathImage}vector3.svg`} alt="vector3" className='img__circle'  />

      </div>
      <div className='sginup__right'>
        <div className="arrowBack__contain">
          <img src={`${pathImage}vector-arrow.svg`} alt="vector-arrow" className='img__arrowBack' />
          <p className='p__arrowBack'>Back</p>
        </div>
        <GamersTextRegister />
        <GamersForm inputs__array={INPUTS_REGISTER} />
        <GamersButtonReg btnText="Register Account" />
        <GamersLineOr />
        <GamersButtonReg btnText="Login" btnLoginWhite /> {/* btnText, btnLoginWhite */}
      </div>
    </div>
  )
}

export default SginupPage