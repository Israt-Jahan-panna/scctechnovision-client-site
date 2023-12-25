import React, { useEffect, useState } from 'react';
import TaskCard from './TaskCard';

const MyTask = () => {
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
        <TaskCard key={tasks.id} tasks={tasks}></TaskCard>
      ))}
      </div>
        </div>
    );
};

export default MyTask;