import React, { useContext, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const CompleteCard = ({tasks,setTasks}) => {
    
    const { user } = useContext(AuthContext);
  const [userEmail, setUserEmail] = useState('');

  const { _id,  description, status, taskTitle, deadline, priority,  } = tasks || {};
//   console.log(tasks);
    return (
        <div>
           {status === "Complete" && (
  <div className="rounded-lg shadow-md p-4 m-12 bg-white">
    <div className="flex flex-col md:flex-row md:justify-between lg:items-center lg:justify-between">
      <div className="mb-4 md:mb-0 ">
        <span className="text-gray-600 font-bold">Title</span>
        <h2 className="text-lg font-semibold w-14">{taskTitle}</h2>
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
        <span className="font-extrabold">{deadline}</span>
      </div>
      <div className="mb-4 md:mb-0">
        <span className="text-gray-600 font-bold text-lg">
          Priority<br />
        </span>
        <span className="font-extrabold">{priority}</span>
      </div>
    </div>
  </div>
)}
        </div>
    );
};

export default CompleteCard;