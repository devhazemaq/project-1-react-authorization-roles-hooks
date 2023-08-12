import React from 'react'
import useAuth from '../../components/hooks/useAuth'

import './style.css'

const ProfilePage = () => {

  const { user } = useAuth();

  console.log(user);
  
  return (
    <div>
      <h1>Profile User</h1>
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
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.isAdmin}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default ProfilePage