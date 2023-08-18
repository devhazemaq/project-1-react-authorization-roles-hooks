
import { useAuthContext } from '../../../context/AuthContext'
import GamersButtonReg from '../GamersButtonReg';
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import './style.css';


const formScama = Yup.object({
  userName: Yup.string()
    .required('user name is required'),

  email: Yup.string()
    .required('email is required')
    .email('email not correct'),

  password: Yup.string()
    .required('password is required'),

  // rePassword: Yup.string()
  //   .required('Retype password')
  //   .oneOf([Yup.ref('passeord', null)],'Retype the password correctly' ),

});






const GamersFormSign = () => {

  const { signup, isLoading } = useAuthContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formScama),
  });


  const submit = async (body) => {

    const data = {
      email: body?.email,
      name: body?.userName,
      password: body?.password,
    }

    signup(data)
  }



  // const handleChangeInput2 = ({ target: { value, name } }) =>
  //   setFormData((prev) => ({ ...prev, [name]: value }));





  return (
    <form onSubmit={handleSubmit(submit)}>
      <label htmlFor='userName' className='labelForRrg' >user name</label>
      <input
        id='userName'
        className='inputForRrg'
        type='text'
        name='userName'
        {...register('userName')}
      />

      {errors?.userName && <span className='span__errors'>{errors?.userName?.message}</span>}
      <label htmlFor='email' className='labelForRrg' >Email</label>
      <input
        id='email'
        className='inputForRrg'
        type='email'
        name='email'
        {...register('email')}
      />
      {errors?.email && <span className='span__errors'>{errors?.email?.message}</span>}
      <label htmlFor='password' className='labelForRrg' >password</label>
      <input
        id='password'
        className='inputForRrg'
        type="password"
        name="password"
        {...register('password')}
      />
      {errors?.password && <span className='span__errors'>{errors?.password?.message}</span>}


      <GamersButtonReg btnText={isLoading ? 'loading...' : 'Register Account'} type="submit" btnMarg="btnMargTop" />
    </form>
  )
}

export default GamersFormSign