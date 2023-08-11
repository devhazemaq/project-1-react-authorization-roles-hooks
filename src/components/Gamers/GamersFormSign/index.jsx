import React, { useState } from 'react'
import { useAuthContext } from '../../../context/AuthContext'
import GamersButtonReg from '../GamersButtonReg';





const GamersFormSign = () => {

  const { signup } = useAuthContext();
  const [formData, setFormData] = useState({
    email: '',
    u: '',
    password: '',
  });


  const handelSubmit = (e) => {
    e.preventDefault();
    signup(formData)
  }

  const handleChangeInput2 = ({ target: { value, name } }) =>
    setFormData((prev) => ({ ...prev, [name]: value }));





  return (
    <form onSubmit={handelSubmit}>
      <label htmlFor='userName' className='labelForRrg' >user name</label>
      <input
        id='userName'
        className='inputForRrg'
        type="text"
        name="name"
        onChange={handleChangeInput2}
        value={formData.name}
      />
      <label htmlFor='email' className='labelForRrg' >user name</label>
      <input
        id='email'
        className='inputForRrg'
        type="email"
        name="email"
        onChange={handleChangeInput2}
        value={formData.email}
      />
      <label htmlFor='password' className='labelForRrg' >password</label>
      <input
        id='password'
        className='inputForRrg'
        type="password"
        name="password"
        onChange={handleChangeInput2}
        value={formData.password}
      />

      <GamersButtonReg btnText="Register Account" type="submit" />
    </form>
  )
}

export default GamersFormSign