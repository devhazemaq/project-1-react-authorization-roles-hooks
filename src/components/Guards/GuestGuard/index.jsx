
import { useNavigate } from 'react-router-dom';
import { ROLES } from '../../../constants';
// import { PATHS } from '../../../router/paths';
import { useAuthContext } from '../../../context/AuthContext';
import { useEffect } from 'react';



const GuestGuard = ({children}) => {

  
  const {role} = useAuthContext();
  const navigate = useNavigate();
  console.log(role)
  // if (role === ROLES.ADMIN) return navigate('/admin'); //PATHS.ADMIN.ROOT
  // if (role === ROLES.USER) return navigate(PATHS.USER.ROOT);
  
  useEffect(() => {
    if (role === ROLES.ADMIN) {
      navigate('/admin'); 
    }
  }, [role, navigate]);
  
  useEffect(() => {
    if (role === ROLES.USER) {
      navigate('/user'); 
    }
  }, [role, navigate]);
  

  return children;  
}

export default GuestGuard;