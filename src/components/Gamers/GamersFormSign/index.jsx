import React, { useState } from 'react'
import { useAuthContext } from '../../../context/AuthContext'
import GamersButtonReg from '../GamersButtonReg';
import * as Yup from "yup";



const formScama = Yup.object({
  text: Yup.string().required('text required'),
  email: Yup.string().required('email required'),
  password: Yup.string().required('password required')
  
})






const GamersFormSign = () => {

  const { signup } = useAuthContext();
  const [errors, setErrors] = useState({}); 
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    password: '',
    // rePassword: '',
  });

  // const [errors,setErrors] = useState({});

  const handelSubmit = async (e) => {
    e.preventDefault();
    
    // const {name, value, type} = e.target;
    
    try{
      const data = await formScama.validate(formData,{
        abortEarly: false,
      })
      console.log(data);
      setErrors(null)
    }catch(error){
      // console.log(error);
      setErrors(error.inner.map((error)=>({[error.path]: error.messge})))
      
      const myErrors = {};
      error.inner.forEach((error)=>{
        myErrors[error.path] = error.messge;
      });
    }
    signup(formData)
  }
  // console.log(errors)


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
      <label htmlFor='email' className='labelForRrg' >Email</label>
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
      {/* <label htmlFor='rePassword' className='labelForRrg' >RE password</label>
      <input
        id='rePassword'
        className='inputForRrg'
        type="password"
        name="rePassword"
        onChange={handleChangeInput2}
        value={formData.rePassword}
        
      /> */}

      <GamersButtonReg btnText="Register Account" type="submit" btnMarg="btnMargTop" />
    </form>
  )
}

export default GamersFormSign