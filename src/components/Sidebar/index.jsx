import React from 'react'
import { NavLink } from 'react-router-dom';
import { PATHS } from '../../router/paths';
import './style.css'; 
import { useThemeContext } from '../../context/ThemeContext';




const Sidebar = () => {

  const {theme, toggleTheme} = useThemeContext();
  
  const pathImage = "/assets/images/";
console.log(theme);
  return (
    <div className='sidebar__main'>
      <img src={`${pathImage}forSideber/svgviewer-output1.svg`} alt="svgviewer-output1" className='svgviewer-output1' />
      <div className="sidebarIcon__contain">
        <ul className='ulIconSidepar'>
          <li>
              <NavLink to={PATHS.ERRORS.NOT_FOUND} >
                <img src={`${pathImage}forSideber/svgviewer-output3Adjust.svg`} alt="svgviewer-output3Adjust" className='adjust' />
              </NavLink> 
          </li>
          <li>
              <NavLink to={PATHS.ERRORS.NOT_FOUND} >
                <img src={`${pathImage}forSideber/exit.png`} alt="exit" className='exit' />
                
              </NavLink> 
          </li>
        </ul>
      </div>
      {/* iconTheme__theme 
      `iconTheme__theme ${theme}`
      */}

      
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