import React, { useContext} from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const TaskCreation = () => {
    const { user } = useContext(AuthContext);
  
    const handleSubmit = (event) => {
      event.preventDefault();
      const form = event.target;
      const taskTitle = form.taskTitle.value;
      const priority = form.priority.value.toUpperCase();
      const deadline = form.deadline.value;
      const description = form.description.value;
      
      
  
      const addedNewTask = {
        user,
        taskTitle,
        deadline,
        description,
        priority
      };
      // Send data to the server
      fetch("http://localhost:4200/tasks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(addedNewTask),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.insertedId) {
            Swal.fire({
              title: "Thank You!",
              text: "Jobs Added Successfully",
              icon: "success",
              confirmButtonText: "Okay",
            }).then(() => {
              // Redirect to /mytask
              window.location.href = "dashboard/mytask";
            });
          }
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    };
  
  return (
    <div >
      <div className="container max-w-screen-lg mx-auto">
        <div className="">
          <h2 className="font-semibold text-2xl text-center text-black  p-4 bg-[#458682] ">
            POST A TASK{" "}
          </h2>

          <div className="bg-white rshadow-lg p-4 px-4 md:p-8 mb-6 ">
            <form onSubmit={handleSubmit}>
              <div className="grid gap-4 gap-y-2 text-lg grid-cols-1 lg:grid-cols-3">
                <div className="text-gray-600">
                  <p className="font-medium text-lg">Task Details</p>
                  <p>Please fill out all the fields.</p>
                </div>

                <div className="lg:col-span-2">
                  <div className="grid gap-4 gap-y-2 text-lg grid-cols-1 md:grid-cols-2">
                    <div className="md:col-span-2">
                      <label htmlFor="taskTitle">Task Title</label>
                      <input
                        type="text"
                        name="taskTitle"
                        id="taskTitle"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      />
                    </div>
                    

                    <div className="md:col-span-1">
                      <label htmlFor="deadline">Deadline</label>
                      <input
                        type="text"
                        name="deadline"
                        id="deadline"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      />
                    </div>

                    <div className="md:col-span-1">
                      <label htmlFor="priority">Priority</label>
                      <select
                        name="priority"
                        id="priority"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      >
                        <option value="">Select Priority</option>
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
                        Add Task
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default TaskCreation;
