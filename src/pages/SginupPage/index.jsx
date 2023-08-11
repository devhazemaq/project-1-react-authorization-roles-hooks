import React from 'react'
import GamersLogo from '../../components/Gamers/GamersLogo'
import './style.css'
import GamersInfo from '../../components/Gamers/GamersInfo';
import GamersTextRegister from '../../components/Gamers/GamersTextRegister';

import GamersButtonReg from '../../components/Gamers/GamersButtonReg';
import GamersLineOr from '../../components/Gamers/GamersLineOr';

import { Link } from 'react-router-dom';
import GamersFormSign from '../../components/Gamers/GamersFormSign';



const SginupPage = () => {

  const pathImage = "/assets/images/";

  return (
    <div className='sginup__main'>
      <div className='sginup__left'>
        <GamersLogo />  {/*logoBlue*/}
        <img src={`${pathImage}vecto2.svg`} alt="vecto2" className='img__points' />
        <GamersInfo /> {/*infoGray*/}
        <img src={`${pathImage}vector4.svg`} alt="vector4" className='img__shape' />
        <img src={`${pathImage}vector3.svg`} alt="vector3" className='img__circle' />

      </div>
      <div className='sginup__right'>
        <Link to="/">
          <div className="arrowBack__contain">
            <img src={`${pathImage}vector-arrow.svg`} alt="vector-arrow" className='img__arrowBack' />
            <p className='p__arrowBack'>Back</p>
          </div>
        </Link>
        <GamersTextRegister />
        {/* here plce of form */}

        <GamersFormSign />

        
        <GamersLineOr />

        <Link to="/">
          <GamersButtonReg btnText="Login" btnLoginWhite /> {/* btnText, btnLoginWhite */}

        </Link>
      </div>
    </div>
  )
}

export default SginupPage