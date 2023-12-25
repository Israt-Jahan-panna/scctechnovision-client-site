import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';

const AllTaskCard = ({tasks, setTasks}) => {
    const { user } = useContext(AuthContext);
  const [userEmail, setUserEmail] = useState('');

  const { _id, description, taskTitle, deadline, priority } = tasks || {};

  const handelCompleteTask = async (event) => {
    event.preventDefault();
    const form = event.target;
    const status = form.status.value.toLowerCase();

    const updatePost = {
      status,
    };

    // Send data to the server
    try {
      const response = await fetch(`https://jobtask-scctechnovision-sever.vercel.app/tasks/${_id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatePost),
      });

      const data = await response.json();
      console.log(data);

      if (data.modifiedCount > 0) {
        // Update state when tasks change
        setTasks((prevTasks) =>
          prevTasks.map((task) => (task._id === _id ? { ...task, status } : task))
        );

        Swal.fire({
          title: 'Thank You!',
          text: 'For this effort',
          icon: 'success',
          confirmButtonText: 'Okay',
        });
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handelOngoingTask = async (event) => {
    event.preventDefault();
    const form = event.target;
    const status = form.status.value.toLowerCase();

    const updatePost = {
      status,
    };

    // Send data to the server
    try {
      const response = await fetch(`https://jobtask-scctechnovision-sever.vercel.app/tasks/${_id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatePost),
      });

      const data = await response.json();
      console.log(data);

      if (data.modifiedCount > 0) {
        // Update state when tasks change
        setTasks((prevTasks) =>
          prevTasks.map((task) => (task._id === _id ? { ...task, status } : task))
        );

        Swal.fire({
          title: 'Thank You!',
          text: 'For this effort',
          icon: 'success',
          confirmButtonText: 'Okay',
        });
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
    return (
        <div>
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
                <form onSubmit={(event) => handleUpdateStatus(event, 'Complete')}>
                  <button className="bg-[#546082] hover:bg-[#3b4357] text-white px-3 py-2 rounded-xl text-sm">
                    Complete
                  </button>
                </form>
                <form onSubmit={(event) => handleUpdateStatus(event, 'Ongoing')}>
                  <button className="bg-[#546082] hover:bg-[#3b4357] text-white px-3 py-2 rounded-xl text-sm">
                    Ongoing
                  </button>
                </form>
              </div>
            </div>
            
          </div>
        </div>
        </div>
        </div>
    );
};

export default AllTaskCard;