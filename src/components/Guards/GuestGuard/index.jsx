
import { useNavigate } from 'react-router-dom';
import { ROLES } from '../../../constants';
import { PATHS } from '../../../router/paths';
import { useAuthContext } from '../../../context/AuthContext';

const GuestGuard = ({children}) => {
  
  const {role} = useAuthContext();
  const navigate = useNavigate();
  console.log(role)
  if (role === ROLES.ADMIN) return navigate(PATHS.ADMIN.ROOT);
  if (role === ROLES.USER) return navigate(PATHS.USER.ROOT);
  
  
  return children;  
}

export default GuestGuard;