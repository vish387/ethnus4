import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './UserTable.css'
function UserTable() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    axios.get('https://dummyjson.com/users')
      .then((response) => {
        setUserData(response.data.users);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className='mainn'>
      <h1>User Data</h1>
      <table style={{width:"100%",padding:"20px",border:"1px solid white",borderRadius:"20px"}}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Image</th>
            <th>First Name</th>
            <th>Last Name</th>
            
            <th>Gender</th>
            <th>Email</th>
            <th>Domain</th>
            <th>IP</th>
            <th>Username</th>
            <th>University</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td><img src={user.image}></img></td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              
              <td>{user.gender}</td>
              <td>{user.email}</td>
              <td>{user.domain}</td>
              <td>{user.ip}</td>
              <td>{user.username}</td>
              <td>{user.university}</td>
              
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserTable;
