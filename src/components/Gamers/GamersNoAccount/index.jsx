import React from 'react'

import './style.css'
import { Link } from 'react-router-dom';
import { PATHS } from '../../../router/paths';

const GamersNoAccount = () => {
  return (
    <div className='gamersnoaccount__contain'>
      Don&rsquo;t have an account? <Link to={PATHS.SGINUP}> <span>Register</span></Link> 
    </div>
  )
};

export default GamersNoAccount;