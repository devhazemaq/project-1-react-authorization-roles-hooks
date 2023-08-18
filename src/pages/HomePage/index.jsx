// import React, { useState } from 'react'
// import { useThemeContext } from '../../context/ThemeContext';
// import { THEMES } from '../../constants';
import Sidebar from '../../components/Sidebar';
import UserAccount from '../../components/UserAccount';
import HeaderTitle from '../../components/HeaderTitle';
import CardImage from '../../components/CardImage';
import LastPlayed from '../../components/LastPlayed';
import MostTrophy from '../../components/MostTrophy';
import './style.css';




const HomePage = () => {

  

  const pathImage = "/assets/images/games/";
  const pathImagePlayed = "/assets/images/lastPlayed/";

  return (
    <div className='homepage__main' >
      <div className='left__part'>
        <Sidebar />
      </div>
  
      <div className="righ__part">
        <UserAccount />
        <div className="swpier__haz">
          <HeaderTitle titleText="NEW GAMES" />

          <div className='cards__contain ' >
            <CardImage imgMain={`${pathImage}game1.png`} imgMainInner={`${pathImage}game1-inner.png`} />
            <CardImage imgMain={`${pathImage}game2.png`} imgMainInner={`${pathImage}game2-inner.png`} />
            <CardImage imgMain={`${pathImage}game3.png`} imgMainInner={`${pathImage}game3-inner.png `} direction="rightDirection" />
            <CardImage imgMain={`${pathImage}game2.png`} imgMainInner={`${pathImage}game2-inner.png`} />
          </div>
        </div>

        <div className="gamers__parts">
          
          <div className="played__haz">
              <HeaderTitle titleText="last played" />
                <div className="played__contain">
                  <LastPlayed 
                    playedImg={`${pathImagePlayed}played1.jpg`} 
                    playedText="Hogwarts Legacy 50%" 
                    colorShadow="colorShadow1"
                  />
                  <LastPlayed 
                    playedImg={`${pathImagePlayed}played2.png`} 
                    playedText="God Of War: Ragnarök 72.5%" 
                    colorShadow="colorShadow2"
                  />
                  <LastPlayed 
                    playedImg={`${pathImagePlayed}played3.png`} 
                    playedText="Crash Bandicoot N. Sane Trilogy 34%" 
                    colorShadow="colorShadow3"
                  />
                  <LastPlayed 
                    playedImg={`${pathImagePlayed}played4.png`} 
                    playedText="Dying Light 2 Stay Human 100%" 
                    colorShadow="colorShadow4"
                  />
              </div>
          </div>
          <div className="trophy__haz">
            <HeaderTitle titleText="most recent trophy" />
            <MostTrophy />
          </div>
          {/* <img src="" alt="" srcset="" /> */}

          <div className="friends_haz">
          <HeaderTitle titleText="friends " />
            <div className="img__frind__contain">
              <img src={`${pathImagePlayed}friendsW.png`} alt="friendsW" className='friendsW' />
            </div>
          </div> 
      
        </div>
        
          
      </div>
    </div>
  )
};

export default HomePage;




// {/*       
//       Hello HAZEM  HAZEM  from HomePage
      
//       <button onClick={toggleTheme} style={theme === THEMES.DARK? {
//         backgroundColor: 'white',
//         color: 'black'
//       }
//       : {
//         backgroundColor: 'black',
//         color: 'white'
//       }
    
//     }>{ theme === THEMES.DARK ? 'Light' : 'Dark' }</button> */}

