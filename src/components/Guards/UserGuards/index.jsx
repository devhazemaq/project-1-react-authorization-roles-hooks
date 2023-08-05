import React from 'react'
import { ROLES } from '../../../constants';
import { Outlet, useNavigate } from 'react-router-dom';
import { PATHS } from '../../../router/paths';

const UserGuards = ({ role }) => {
  const navigate = useNavigate();

  if (role === ROLES.USER) return <Outlet/>;

  return navigate(PATHS.HOME);
};

export default UserGuards;