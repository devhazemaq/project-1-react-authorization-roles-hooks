import React from 'react'
import './style.css';
import { useThemeContext } from '../../context/ThemeContext';
import { useAuthContext } from '../../context/AuthContext';
import { NavLink, useNavigate } from 'react-router-dom';
import { ROLES, THEMES } from '../../constants';
import { PATHS } from '../../router/paths';




const Sidebar = () => {
  const { role, logout } = useAuthContext(); //, user
  const { theme, toggleTheme } = useThemeContext();
  const pathImage = "/assets/images/";
  const pathImageIcon = "/assets/images/forSideber/";


  const navigate = useNavigate()

  const handleLogout = () => {
    logout();
    // console.log(role + ' handleLogout');
    navigate("/")
  };

  // useEffect(() => { }, [])


  // console.log(role);
  // console.log(user);
  // console.log(theme);
  return (
    <div className='sidebar__main'>
      {role === ROLES.ADMIN ?
        <NavLink to={PATHS.ADMIN.ROOT}>
          <img src={`${pathImage}forSideber/svgviewer-output1.svg`} alt="svgviewer-output1" className='svgviewer-output1' />
        </NavLink>
        :
        <NavLink to={PATHS.USER.ROOT}>
          <img src={`${pathImage}forSideber/svgviewer-output1.svg`} alt="svgviewer-output1" className='svgviewer-output1' />
        </NavLink>
      }


      <div className="sidebarIcon__contain">
        <ul className='ulIconSidepar'>
          <li>
            {role === ROLES.ADMIN ?
              <NavLink to={PATHS.ADMIN.USERS}>
                {theme === THEMES.LIGHT ?
                  <img
                    src={`${pathImageIcon}settings-gray.svg`}
                    alt="settings" className='adjust'
                  />
                  :
                  <img
                    src={`${pathImageIcon}settings-white.svg`}
                    alt="settings"
                    className='adjust'
                  />
                }
              </NavLink>
              :
              <></>
            }
          </li>
          <li>
            {theme === THEMES.LIGHT ?
              <img src={`${pathImageIcon}exit-gray.svg`}
                alt="exit" className='exit'
                onClick={handleLogout}
              />
              :
              <img src={`${pathImageIcon}exit-white.svg`}
                alt="exit" className='exit'
                onClick={handleLogout}
              />
            }
          </li>
        </ul>
      </div>


      <div className={`iconTheme__theme`} onClick={toggleTheme} >
        <img
          src={`${pathImage}forSideber/svgviewer-output4-crescent-light.svg`}
          alt="crescent"

        />
        <img
          src={`${pathImage}forSideber/svgviewer-output5-sun-light.svg`}
          alt="sun"
        />

      </div>
    </div>

  )

};

export default Sidebar;