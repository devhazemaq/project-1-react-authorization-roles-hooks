
import { NavLink } from 'react-router-dom';
import './style.css';
import { PATHS } from '../../router/paths';
// import { ROLES } from '../../constants';
// import useAuth from '../../hooks/useAuth';


const UserAccount = () => {

  // const { user } = useAuth();
  const pathImage = "/assets/images/";
  
  let dataUser = JSON.parse(localStorage.getItem("user")) 

  // console.log(dataUser);  

  return (
    <div className='useracc__main'>
      <div className="useracc__welcome">
        <p >Welcme back,</p>
        <p >{dataUser?.name}!</p>
      </div>
      {dataUser?.isAdmin === true ? 
        <NavLink to={PATHS.ADMIN.PROFILE}>
          <img src={`${pathImage}profile_img_admin.png`} alt="profile_img" className='profile__img'   />
        </NavLink>
      : 
        <NavLink to={PATHS.USER.PROFILE}>
          <img src={`${pathImage}profile_img.png`} alt="profile_img" className='profile__img'   />
        </NavLink>
      }
    </div>
  )
};

export default UserAccount;