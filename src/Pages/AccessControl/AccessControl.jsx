import React, { useState, useEffect } from 'react';
import { FaTrashAlt, FaUsers } from 'react-icons/fa';
import Swal from 'sweetalert2';

const AccessControl = () => {
  
  const [users, setUsers] = useState([]);
  const [selectedRole, setSelectedRole] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:4200/users');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []); 

  


  return (
    <div className="bg-white">
    <div className="flex justify-evenly my-4">
      <h2 className="text-3xl">All Users</h2>
      <h2 className="text-3xl">Total Users: {users.length}</h2>
    </div>
    <div className="overflow-x-auto">
      <table className="table table-zebra w-full">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user._id}>
              <th>{index + 1}</th>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              
              <td>
                
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
  );
};

export default AccessControl;
