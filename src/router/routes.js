import { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import AdminGuards from '../components/Guards/AdminGuards';
import UserGuards from '../components/Guards/UserGuards';
import GuestGuard from '../components/Guards/GuestGuard';

import { PATHS } from './paths';


const LoginPage = lazy (() => import('../pages/LoginPage'))
const SginupPage = lazy (() => import('../pages/SginupPage'))
const HomePage = lazy (() => import('../pages/HomePage'))
const ProfilePage = lazy (() => import('../pages/ProfilePage'));
const SettingsUsersPade = lazy (() => import('../pages/SettingsUsersPade'));



const adminPages = [
  {
    path: PATHS.ADMIN.ROOT,
    element: <AdminGuards />,
    children: [
      {
        index: true,
        element: <HomePage/>,
      },
      {
        path: PATHS.ADMIN.USERS,
        element: <SettingsUsersPade/>,
      },
      {
        path: PATHS.ADMIN.PROFILE,
        element: <ProfilePage/>,
      },
      
    ],
  },
];

const userPages = [
  { 
    path: PATHS.USER.ROOT ,
    element: <UserGuards />,
    children: [
      {
        index: true,
        element: <HomePage/>,
      },
      {
        path: PATHS.USER.PROFILE,
        element: <ProfilePage/>,
      },

    ],
  },      
];


const gusetPages =[
  {
    path: PATHS.LOGIN,
    // index: true,
    element: (
      <GuestGuard>
        <LoginPage />
      </GuestGuard>
    )
  },
  {
    path: PATHS.SGINUP,
    element: (
      <GuestGuard>
        <SginupPage />
      </GuestGuard>
    )

  },
];

const routes = [
  ...adminPages,
  ...userPages,
  ...gusetPages,
  {
    path: PATHS.ERRORS.NOT_FOUND,
    element: <h1>Page Not Found Ylla</h1>
  },
  {
    path: '*',
    element: <Navigate to= {PATHS.ERRORS.NOT_FOUND} replace={true} />,
  },
];

export {  routes };