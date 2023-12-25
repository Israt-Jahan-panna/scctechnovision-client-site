import React from 'react';

const UpdateTask = () => {
    return (
        <div>
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