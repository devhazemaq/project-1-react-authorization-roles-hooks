
import { useNavigate } from 'react-router-dom';
import { ROLES } from '../../../constants';
import { PATHS } from '../../../router/paths';
import { useAuthContext } from '../../../context/AuthContext';

const GuestGuard = ({children}) => {
  
  const {role} = useAuthContext();
  
  const navigate = useNavigate();

  if (role === ROLES.ADMIN) return navigate(PATHS.HAZ);
  if (role === ROLES.USER) return navigate(PATHS.HOME);
  return children;
}

export default GuestGuard;