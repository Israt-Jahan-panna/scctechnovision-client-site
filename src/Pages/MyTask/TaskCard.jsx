import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const TaskCard = ({tasks,setTasks}) => {
    const { user } = useContext(AuthContext);
    const [userEmail, setUserEmail] = useState('');

  const { _id,  description, creatorEmail,  taskTitle, deadline, priority,  } = tasks || {};
  
  useEffect(() => {
    // Check if user is defined and has an email property
    if (user && user.email) {
      // Update the state with the user's email
      setUserEmail(user.email);
    }
  }, [user]);

  const handelDelete = () => {
    console.log(_id);
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(` https://jobtask-scctechnovision-sever.vercel.app/tasks/${_id}`, {
          method: 'DELETE'
        })
          .then(res => res.json())
          .then(data => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire(
                'Deleted!',
                'Your product has been deleted.',
                'success'
              );
              const remaining = tasks.filter(pro => pro._id !== _id);
              setTasks(remaining);
            }
          });
      }
    });
  };

  return (
    <div>
      {userEmail === creatorEmail && (
        <div>
            <div className=" rounded-lg shadow-md p-4 m-12 bg-white">
          <div className="flex flex-col md:flex-row md:justify-between lg:items-center lg:justify-between ">
            <div className="mb-4 md:mb-0 ">
                <span className="text-gray-600 font-bold">Title</span>
              <h2 className="text-lg font-semibold w-14">{ taskTitle}</h2>
            </div>

            

            <div className="mb-4 md:mb-0 w-72">
              <span className="text-gray-600 font-bold">
                Description
                <br />
              </span>
              <span className="text-black text-xs">{description}</span>
            </div>

            <div className="mb-4 md:mb-0">
              <span className="text-gray-600 font-bold text-lg">
                Deadline <br />
              </span>
              <span className="font-bold text-sm">{deadline}</span>
            </div>
            <div className="mb-4 md:mb-0">
              <span className="text-gray-600 font-bold text-base">
                Priority<br />
              </span>
              <span className="font-extrabold">{priority}</span>
            </div>
            <div className="flex gap-2 items-center">
              <i className="fa-regular fa-bookmark" style={{ color: "#244034" }}></i>

              <div className="flex justify-center gap-2">
                <NavLink to={`updatepost/${_id}`}>
                <button className="bg-[#546082] hover:bg-[#3b4357] text-white px-3 py-2 rounded-xl text-sm">
                  Update
                </button>
                </NavLink>
                <button onClick={handelDelete} className="bg-[#546082] hover:bg-[#3b4357] text-white px-3 py-2 rounded-xl text-sm">
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
        </div>
      )}
      
    </div>
  );
};

export default TaskCard;