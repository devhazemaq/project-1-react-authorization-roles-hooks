
import { useNavigate } from 'react-router-dom';
import { ROLES } from '../../../constants';
import { useAuthContext } from '../../../context/AuthContext';
import { useEffect } from 'react';
import { PATHS } from '../../../router/paths';



const GuestGuard = ({children}) => {

  
  const {role} = useAuthContext();
  const navigate = useNavigate();
  console.log(role)
  // if (role === ROLES.ADMIN) return navigate('/admin'); //PATHS.ADMIN.ROOT
  // if (role === ROLES.USER) return navigate(PATHS.USER.ROOT);
  
  useEffect(() => {
    if (role === ROLES.ADMIN) {
      navigate(PATHS.ADMIN.ROOT); 
    }
  }, [role, navigate]);
  
  useEffect(() => {
    if (role === ROLES.USER) {
      navigate(PATHS.USER.ROOT); 
    }
  }, [role, navigate]);
  
  if (role === ROLES?.GUEST) {
    return children;  
  }
    
}

export default GuestGuard;