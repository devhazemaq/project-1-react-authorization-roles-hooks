import React, { useState } from 'react'

import { useAuthContext } from '../../../context/AuthContext';

import './style.css'
import GamersButtonReg from '../GamersButtonReg';



const GamersForm = () => {
  const { login, isLoading } = useAuthContext(); //isLoading
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    login(formData)


  };

  const handleChangeInput = ({ target: { value, name } }) =>
    setFormData((prev) => ({ ...prev, [name]: value }));

  // const onClickBtn = () => {
  //   console.log('onClickBtn')
  // }


  return (


    <form onSubmit={handleSubmit}>
      <label htmlFor='email' className='checkboxForRrg' >email</label>
      <input
        className='inputForRrg'

        type='text'
        id='email'
        name='email'
        onChange={handleChangeInput}
        value={formData.email}
      />

      <label htmlFor='password' className='checkboxForRrg' >Password</label>
      <input
        className='inputForRrg inputForRrg--marg '
        type='password'
        id='password'
        name='password'
        onChange={handleChangeInput}
        value={formData.password}
      />

      <GamersButtonReg btnText={isLoading ? "Loding" : "Login"} type='submit' />
      {/* <button type='submit'>Login</button> */}


    </form>

  )
};

export default GamersForm;











{/* { inputs__array?.map((input)=> (
        <div key={input?.id}>

          { input?.type !== 'checkbox' ? (
            <>
              <label htmlFor={input?.id} className='labelForRrg'>{input?.label}</label>
              <input
                className='inputForRrg'
                type={input?.type}
                id={input?.id}
                name={input?.name}
                placeholder={input?.placeholder}
                value="sssss"
                onChange={handleChangeInput}
                
              />
              <span className='errorMassge'>*please enter correctly</span><br />
            </>
            
          ) : (
            <>
              <input
                className='checkboxForRrg'
                type={input?.type}
                id={input?.id}
                name={input?.name}
                placeholder={input?.placeholder}
                value='hhhhhhh'
                onChange={handleChangeInput}
                
              />
              <label htmlFor={input?.id} className='checkboxForRrg'>{input?.label}</label>
              <span className='errorMassge2'>*gree for roles</span><br />
            </>
          )

          }
          
        </div>
      ))}
       */}