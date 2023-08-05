import React from 'react'
import { ROLES } from '../../../constants'
import { Outlet, useNavigate } from 'react-router-dom'
import { PATHS } from '../../../router/paths';

const AdminGuards = ({ role }) => {
  const navigate = useNavigate();

  if (role === ROLES.ADMIN) return <Outlet/>

  return navigate(PATHS.HOME);

}

export default AdminGuards