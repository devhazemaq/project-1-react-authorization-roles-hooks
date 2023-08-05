import  { useState } from 'react'
import { routes } from './routes'
import { useRoutes } from 'react-router-dom'
import { ROLES } from '../constants'

const Router = () => {

  const [role] =useState(ROLES.ADMIN)

  const router = useRoutes(routes(role));

  return router;
}

export default Router;