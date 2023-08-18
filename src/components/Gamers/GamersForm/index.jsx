import React from 'react'
import { useAuthContext } from '../../../context/AuthContext';
import * as Yup from "yup"
import GamersButtonReg from '../GamersButtonReg';
import './style.css'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';


const formScama = Yup.object({
  email: Yup.string()
    .required('email is required')
    .email('email not correct'),

  password: Yup.string()
    .required('password is required'),

});

const GamersForm = () => {

  const { login, isLoading } = useAuthContext(); //isLoading
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formScama)
  })


  const submit = (body) => {
    
    const data = {
      email: body?.email,
      password: body?.password,
    }
    
    login(data)
  };



  return (


    <form onSubmit={handleSubmit(submit)}>
      <label htmlFor='email' className='checkboxForRrg' >email</label>
      <input
        className='inputForRrg'
        type='text'
        id='email'
        name='email'
        {...register('email')}
      />
        
        {errors?.email && <span className='span__errors'>{errors?.email?.message}</span>}

      <label htmlFor='password' className='checkboxForRrg' >Password</label>
      <input
        className='inputForRrg inputForRrg--marg '
        type='password'
        id='password'
        name='password'
        {...register('password')}
      />
      {errors?.password && <span className='span__errors'>{errors?.password?.message}</span>}
      <GamersButtonReg btnText={isLoading ? "Loding" : "Login"} type='submit' />
    


    </form>

  )
};

export default GamersForm;










