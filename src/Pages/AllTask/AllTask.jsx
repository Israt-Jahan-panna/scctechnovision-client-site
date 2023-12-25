import React, { useEffect, useState } from 'react';
import AllTaskCard from './AllTaskCard';

const AllTask = () => {
    const [tasks, setTasks] = useState([]);
    useEffect(() => {
        fetch(" http://localhost:4200/tasks")
          .then((res) => res.json())
          .then((data) => setTasks(data));
      });
      console.log(tasks);
    return (
        <div>
           <div className="">
      {tasks.map((tasks) => (
        <AllTaskCard key={tasks.id} tasks={tasks}></AllTaskCard>
      ))}
      </div>
        </div>
    );
};

export default AllTask;