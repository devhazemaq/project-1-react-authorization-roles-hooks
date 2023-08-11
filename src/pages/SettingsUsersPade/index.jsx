import React, { useEffect, useState } from 'react'
import Table from '../../components/Table';
import { PATHS } from '../../router/paths';
import { NavLink, useNavigate } from 'react-router-dom';
import { USERS_COLUMNS } from '../../constants/users';
import useAuth from '../../components/hooks/useAuth';
import axios from 'axios';
import { AUTH_API } from '../../config';
import { AUTH_API_PATHS } from '../../constants/auth';
import GamersButtonReg from '../../components/Gamers/GamersButtonReg';
import './style.css'


const SettingsUsersPade = () => {
  const {getProfileData } = useAuth();
  const adminToken = localStorage.getItem("token");
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  
  const [isLoading, setIsLoading] = useState(true); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get( AUTH_API + AUTH_API_PATHS.PROFLE, {
          
          headers: { Authorization: `Bearer ${adminToken}` }
        });
        setUsers(response.data.users);
        setIsLoading(false); 
      } catch (error) {
        console.log(error);
        setIsLoading(false); 
      }
    };

    fetchData();
  }, [adminToken]);



  
  return (
    <div className='settings__main'>
      <h1>Admin ==  User</h1>

      
      <Table
        columns={USERS_COLUMNS()}
        data={users}
        onRowClick={()=>{}}
        isLoading={isLoading}
      /> 
      
      <NavLink to={"/admin"}>
        <GamersButtonReg btnText="Back to Home"  />
      </NavLink>

    </div>
  )
}

export default SettingsUsersPade