import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const UpdateTask = () => {
    const tasks = useLoaderData();
    const location = useLocation();
    const navigate = useNavigate();
    const { _id,  description, creatorEmail,  taskTitle, deadline, priority,  } = tasks || {};
    const { user,loading } = useContext(AuthContext);
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    // Check if user is defined and has an email property
    if (user && user.email) {
      // Update the state with the user's email
      setUserEmail(user.email);
    }
  }, [user]);
    const handelUpdatePost = (event) => {
  event.preventDefault();
  const form = event.target;
  const taskTitle = form.taskTitle.value;
  const creatorEmail = form.creatorEmail.value;
  const deadline = form.deadline.value;
  const description = form.description.value;
  const priority = form.priority.value.toUpperCase();


  const updatePost = {
   creatorEmail,
    taskTitle,
    deadline,
    description,
    priority
    
  };
  

  // Send data to the server
  fetch(`  https://jobtask-scctechnovision-sever.vercel.app/tasks/${_id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatePost),
  })
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Thank You!",
            text: "Task Updated Successfully",
            icon: "success",
            confirmButtonText: "Okay",
          });
        }
      })
      
      .catch((error) => {
        console.error("Error:", error);
      });
};
    return (
        <div>
            <div className="bg-white rshadow-lg p-4 px-4 md:p-8 mb-6 ">
            <form onSubmit={handelUpdatePost}>
              <div className="grid gap-4 gap-y-2 text-lg grid-cols-1 lg:grid-cols-3">
                <div className="text-gray-600">
                  <p className="font-medium text-lg">Task Details</p>
                  <p>Please fill out all the fields.</p>
                </div>

                <div className="lg:col-span-2">
                  <div className="grid gap-4 gap-y-2 text-lg grid-cols-1 md:grid-cols-2">
                  <div className="md:col-span-2 text-black">
                      <label htmlFor="taskTitle">Email of the Employee</label>
                      <input
                        name="creatorEmail"
                        id="creatorEmail"
                        className="h-10 border mt-1 rounded px-4 w-full "
                        readOnly
                        value={creatorEmail}
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label htmlFor="taskTitle">Task Title</label>
                      <input
                        type="text"
                        name="taskTitle"
                        id="taskTitle"
                        defaultValue={taskTitle}
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      />
                    </div>
                    

                    <div className="md:col-span-1">
                      <label htmlFor="deadline">Deadline</label>
                      <input
                        type="text"
                        name="deadline"
                        id="deadline"
                        defaultValue={deadline}
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      />
                    </div>

                    <div className="md:col-span-1">
                      <label htmlFor="priority">Priority</label>
                      <select
                        name="priority"
                        id="priority"
                        defaultValue={priority}
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      >
                        <option value="">{priority}</option>
                        <option value="Low">Low</option>
                        <option value=" High">
                          High
                        </option>
                        <option value="Moderate">Moderate</option>
                      </select>
                    </div>

                    <div className="md:col-span-2">
                      <label htmlFor="description">Description</label>
                      <textarea
                        name="description"
                        id="description"
                        defaultValue={description}
                        className="h-20 border mt-1 rounded px-4 w-full bg-gray-50"
                      ></textarea>
                    </div>

                  </div>
                </div>
                <div className="md:col-span-5 text-right">
                  <div className="flex items-center justify-center gap-4 mt-6">
                    
                    <div>
                      <button
                        className="bg-[#458682] hover:bg-[#154441] text-white font-bold py-2 px-4 rounded "
                        type="submit"
                      >
                        Update Task
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
    );
};

export default UpdateTask;