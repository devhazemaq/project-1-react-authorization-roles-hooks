
import { useNavigate } from 'react-router-dom';
import { ROLES } from '../../../constants';
import { PATHS } from '../../../router/paths';

const GuestGuard = ({role,children}) => {
  const navigate = useNavigate();

  if (role === ROLES.ADMIN) return navigate(PATHS.HAZ);
  if (role === ROLES.USER) return navigate(PATHS.HOME);
  return children;
}

export default GuestGuard;