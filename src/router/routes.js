import LoginPage from '../pages/LoginPage'
import SginupPage from '../pages/SginupPage'
import HomePage from '../pages/HomePage'
import { PATHS } from './paths';
// import HazPage from '../pages/HazPage';
// import AdminGuards from '../components/Guards/AdminGuards';
import UserGuards from '../components/Guards/UserGuards';
import GuestGuard from '../components/Guards/GuestGuard';
import { Navigate } from 'react-router-dom';


// const adminPages = [
//   {
//     path: '/',
//     element: <AdminGuards />,
//     children: [
//       {
//         index: true,
//         element: <HazPage/>,
//       },
//     ],
//   },
// ];

const userPages = [
  { 
    path: '/' ,
    element: <UserGuards />,
    children: [
      {
        index: true,
        element: <HomePage/>,
      },
    ],
  },
];

// const userPages = [
//   {
//     index: true,
//     element: (
//       <UserGuards >
//         <HomePage />
//       </UserGuards>
//     ),
//   },
// ];

const gusetPages =[
  {
    // index: true,
    path: '/login',
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
  // ...adminPages,
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
