import React from 'react'
import useAuth from '../../hooks/useAuth'

import './style.css'
import Sidebar from '../../components/Sidebar';

const ProfilePage = () => {

  const { user } = useAuth();

  // console.log(user);

  return (

    <div className='prof_main'>

      <div className="left__part__prof">
        <Sidebar />
      </div>

      <div className="right__part__prof">
        <>
          <h1 className='h1__prof'>Profile User</h1>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>is Admin</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className='hazMov'>{user?._id}</td>
                <td className='hazMov'>{user?.name}</td>
                <td className='hazMov'>{user?.email}</td>
              </tr>
            </tbody>
          </table>


  
        </>
      </div>
    </div>

  )
}

export default ProfilePage