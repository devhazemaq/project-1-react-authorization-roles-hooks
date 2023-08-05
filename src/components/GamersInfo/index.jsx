import React from 'react'
import './style.css'


const GamersInfo = ({ infoGray }) => {
  return (

    <div className='gamersinfo__main' >
      {infoGray ?
        <div className="gamersinfo__contain gamersinfo__contain__blue">
          <p className='p__gamersinfo p__gamersinfo__1 p1__gray' >“</p>
          <p className='p__gamersinfo p__gamersinfo__2 p2__gray'>I always observe the people who pass by when I ride an escalator. I'll never see most of them again, so I imagine a lot of things about their lives... about the day ahead of them.</p>
          <p className='p__gamersinfo p__gamersinfo__3 p3__gray'>Hideo Kojima</p>
        </div>
        :
        <div className="gamersinfo__contain">
          <p className='p__gamersinfo p__gamersinfo__1' >“</p>
          <p className='p__gamersinfo p__gamersinfo__2'>I always observe the people who pass by when I ride an escalator. I'll never see most of them again, so I imagine a lot of things about their lives... about the day ahead of them.</p>
          <p className='p__gamersinfo p__gamersinfo__3'>Hideo Kojima</p>
        </div>

      }

    </div>
  )
}

export default GamersInfo