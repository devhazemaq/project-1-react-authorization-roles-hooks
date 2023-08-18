import React, { useEffect, useState } from 'react'
import Table from '../../components/Table';
import { NavLink } from 'react-router-dom';
import { USERS_COLUMNS } from '../../constants/users';
import axios from 'axios';
import { AUTH_API } from '../../config';
import { AUTH_API_PATHS } from '../../constants/auth';
import GamersButtonReg from '../../components/Gamers/GamersButtonReg';
import './style.css'
import Sidebar from '../../components/Sidebar';


const SettingsUsersPade = () => {

  const adminToken = localStorage.getItem("token");

  const [users, setUsers] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const allData = await axios.get(AUTH_API + AUTH_API_PATHS.PROFLE, {
          headers: { Authorization: `Bearer ${adminToken}` }
        });
        setUsers(allData.data.users);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [adminToken]);

  const heandleDeleteUSer = async (userId) => {
    window.confirm("Are you sure you want to delete this user?");

    try {
      await axios.delete(AUTH_API + `/users/${userId}`, {
        headers: { Authorization: `Bearer ${adminToken}` }
      })
      setUsers(prevUsers => prevUsers.filter(user => user._id !== userId));
    } catch (error) {
      console.log(error.message);
    }
  }


  return (
    <div className='settings__main'>

      <div className="left__part__set">
        <Sidebar />
      </div>

      <div className="right__part__set">
        <h1>Admin ==&gt;  Users</h1>


        <Table
          columns={USERS_COLUMNS(heandleDeleteUSer)}
          data={users}
          onRowClick={() => { }}
          isLoading={isLoading}
        />

        <NavLink to={"/admin"}>
          <GamersButtonReg btnText="Back to Home" />
        </NavLink>
      </div>




    </div>
  )
}

export default SettingsUsersPade