import React from 'react'

import './style.css'
import { Link } from 'react-router-dom';

const GamersNoAccount = () => {
  return (
    <div className='gamersnoaccount__contain'>
      Don&rsquo;t have an account? <Link to="/sginin"> <span>Register</span></Link> 
    </div>
  )
};

export default GamersNoAccount;