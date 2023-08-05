import LoginPage from '../pages/LoginPage'
import SginupPage from '../pages/SginupPage'
import HomePage from '../pages/HomePage'
import { PATHS } from './paths';
import HazPage from '../pages/HazPage';
import AdminGuards from '../components/Guards/AdminGuards';
import UserGuards from '../components/Guards/UserGuards';
import GuestGuard from '../components/Guards/GuestGuard';
import { Navigate } from 'react-router-dom';


const adminPages = (role) => [
  {
    index: true,
    element: (
      <AdminGuards role={role}>
        <HazPage />
      </AdminGuards>)
  },
];

const userPages = (role) => [
  {
    index: true,
    element: (
      <UserGuards role={role}>
        <HomePage />
      </UserGuards>
    ),
  },
];

const gusetPages = (role) => [
  {
    path: PATHS.LOGIN,
    element: (
      <GuestGuard role={role} >
        <LoginPage />
      </GuestGuard>
    )
  },
  {
    path: PATHS.SGININ,
    element: (
      <GuestGuard role={role} >
        <SginupPage />
      </GuestGuard>
    )

  },
];

const routes = (role) => [
  ...gusetPages(role),
  ...adminPages(role),
  ...userPages(role),
  {
    path: PATHS.ERRORS.NOT_FOUND,
    element: <h1>Page Not Found Ylla</h1>
  },
  {
    path: '*',
    element: <Navigate to= {PATHS.ERRORS.NOT_FOUND} replace={true} />,
  },
];

export { gusetPages, routes };
