import React, { useEffect } from 'react'
// import { NavLink, useNavigate } from 'react-router-dom';
// import { PATHS } from '../../router/paths';
import './style.css'; 
import { useThemeContext } from '../../context/ThemeContext';
import { useAuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { ROLES } from '../../constants';




const Sidebar = () => {
  const {role, user, logout} =useAuthContext(); 
  const {theme, toggleTheme} = useThemeContext();
  const pathImage = "/assets/images/";


  const navigate =  useNavigate()

  const handleLogout = () => {
    logout();
    console.log(role + ' handleLogout');
    navigate("/")
  };

  useEffect(()=>{},[])


console.log(role);
console.log(user);
console.log(theme);
  return (
    <div className='sidebar__main'>
      <img src={`${pathImage}forSideber/svgviewer-output1.svg`} alt="svgviewer-output1" className='svgviewer-output1' />
      <div className="sidebarIcon__contain">
        <ul className='ulIconSidepar'>
          <li>
              {role === ROLES.ADMIN? 
                  <img src={`${pathImage}forSideber/svgviewer-output3Adjust.svg`} alt="svgviewer-output3Adjust" className='adjust' />
                : 
                <></> 
              }
          </li>
          <li>
              {/* <NavLink to={PATHS.LOGIN} > */}
                <img src={`${pathImage}forSideber/exit.png`} 
                alt="exit" className='exit'
                onClick={
                    handleLogout
                  
                }
                
              />
                
            
          </li>
        </ul>
      </div>
        
      
      <div className={`iconTheme__theme`} onClick= {toggleTheme } >
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