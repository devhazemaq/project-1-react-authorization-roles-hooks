import React from 'react'
import { ROLES } from '../../../constants';
import { Outlet, useNavigate } from 'react-router-dom';
import { PATHS } from '../../../router/paths';
import { useAuthContext } from '../../../context/AuthContext';

const UserGuards = () => {

  const { role } = useAuthContext(); 
  // console.log(role)

  const navigate = useNavigate();

  if (role === ROLES.USER) return <Outlet/>;

  return navigate(PATHS.LOGIN);
};

export default UserGuards;