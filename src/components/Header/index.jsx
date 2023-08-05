import React from 'react'
import { NavLink } from 'react-router-dom';
import './style.css'
import { PATHS } from '../../router/paths';


const Header = () => {
  // const { role, user, setUser, setToken, setRole } = useAuthContext();
  // const handleLogout = () => {
  //   setUser(null);
  //   setToken("");
  //   setRole(ROLES.GUEST);
  // }


  return (
    <header className='header' >
      <h1>Header</h1>

      <nav>
        <ul>
          <li>
            <NavLink to={PATHS.LOGIN}>
              {({ isActive, isPending }) => (isActive ? <u>Login</u> : 'Login')}
            </NavLink>
          </li>
          <li>
            <NavLink to={PATHS.SGININ}>
              {({ isActive, isPending }) => (isActive ? <u>Sginin</u> : 'Sginin')}
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
};

export default Header;