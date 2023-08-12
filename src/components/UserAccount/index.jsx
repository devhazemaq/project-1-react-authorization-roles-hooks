
import './style.css';
import useAuth from '../hooks/useAuth';


const UserAccount = () => {

  const {user} = useAuth();
  

  const pathImage = "/assets/images/";
  
  

  return (
    <div className='useracc__main'>
      <div className="useracc__welcome">
        <p >Welcme back,</p>
        <p >{user?.name || 'user'}!</p>
      </div>
      {/* <NavLink to={"/user/profile"}> */}
        <img src={`${pathImage}profile_img.png`} alt="profile_img" className='profile__img'   />
      {/* </NavLink> */}
    </div>
  )
};

export default UserAccount;