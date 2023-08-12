import LoginPage from '../pages/LoginPage'
import SginupPage from '../pages/SginupPage'
import HomePage from '../pages/HomePage'
import { PATHS } from './paths';
// import HazPage from '../pages/HazPage';
import AdminGuards from '../components/Guards/AdminGuards';
import UserGuards from '../components/Guards/UserGuards';
import GuestGuard from '../components/Guards/GuestGuard';
import { Navigate } from 'react-router-dom';
import ProfilePage from '../pages/ProfilePage';
import SettingsUsersPade from '../pages/SettingsUsersPade';


const adminPages = [
  {
    path: '/admin',
    element: <AdminGuards />,
    children: [
      {
        index: true,
        element: <HomePage/>,
      },
      {
        path: '/admin/users',
        element: <SettingsUsersPade/>,
      },
      
    ],
  },
];

const userPages = [
  { 
    path: '/user' ,
    element: <UserGuards />,
    children: [
      {
        index: true,
        element: <HomePage/>,
      },
      {
        path: '/user/profile',
        element: <ProfilePage/>,
      },

    ],
  },      
];

// const userPages = [
//   {
//     path: '/' ,
//     // index: true,
//     element: (
//       <UserGuards >
//         <HomePage />
//       </UserGuards>
//     ),
//   },
// ];

const gusetPages =[
  {
    path: '/',
    // index: true,
    element: (
      <GuestGuard>
        <LoginPage />
      </GuestGuard>
    )
  },
  {
    path: PATHS.SGININ,
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


// import { Navigate } from 'react-router-dom';
// import { PATHS } from './pathes';
// import { Typography } from '../components/Typography';
// import LoginPage from '../pages/LoginPage';
// import SignupPage from '../pages/SignupPage';
// import GamesPage from '../pages/GamesPage';
// import ProfilePage from '../pages/ProfilePage';
// import UsersPage from '../pages/UsersPage';
// import GamesOutlet from '../components/GamesOutlet';
// import GuestGuard from '../components/Guards/GuestGuard';
// import UserGuard from '../components/Guards/UserGaurd';
// import AdminGuard from '../components/Guards/AdminGuard';
// import NotFound from '../pages/NotFound';

// export const routes = (role) => [
//   {
//     path: PATHS.LOGIN,
//     element: (
//       <GuestGuard>
//         <LoginPage />
//       </GuestGuard>
//     ),
//   },
//   {
//     path: PATHS.SIGNUP,
//     element: (
//       <GuestGuard>
//         <SignupPage />
//       </GuestGuard>
//     ),
//   },
//   {
//     path: PATHS.HOME,
//     element: (
//       <UserGuard>
//         <GamesPage />
//       </UserGuard>
//     ),
//     children: [
//       {
//         index: true,
//         element: <GamesOutlet />,
//       },
//       {
//         path: PATHS.PROFILE,
//         element: <ProfilePage />,
//       },
//       {
//         path: PATHS.USERS,
//         element: (
//           <AdminGuard>
//             <UsersPage />
//           </AdminGuard>
//         ),
//       },
//     ],
//   },
//   {
//     path: PATHS.ERRORS.NOT_FOUND,
//     element: <NotFound />,
//   },
//   {
//     path: '*',
//     element: <Navigate to={PATHS.ERRORS.NOT_FOUND} replace={true} />,
//   },
// ];