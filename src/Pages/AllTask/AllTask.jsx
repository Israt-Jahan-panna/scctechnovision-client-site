import React, { useEffect, useState } from 'react';
import AllTaskCard from './AllTaskCard';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import CompleteCard from './CompleteCard';
import Ongoingcard from './Ongoingcard';

const AllTask = () => {
    const [tasks, setTasks] = useState([]);
    
  const [activeTab, setActiveTab] = useState(0);
    useEffect(() => {
        fetch(" https://jobtask-scctechnovision-sever.vercel.app/tasks")
          .then((res) => res.json())
          .then((data) => setTasks(data));
      });
      // console.log(tasks);
     
    return (
        <div>
          <Tabs selectedIndex={activeTab} onSelect={(index) => setActiveTab(index)}>
          <TabList className="relative flex gap-11 list-none flex-wrap  bg-white p-1 text-xl lg:font-bold items-center justify-center">
            <Tab selectedClassName="border-b-2 border-blue-400 text-sm mb-4">
              <p className="text-lg font-bold">All Task</p>
            </Tab>
            <Tab selectedClassName="border-b-2 border-blue-400">
              <p className="text-lg font-bold">Ongoing</p>
            </Tab>
            <Tab selectedClassName="border-b-2 border-blue-400">
            <p className="text-lg font-bold">Complete</p>

            </Tab>
          </TabList>
        <TabPanel >
        <div className="">
      {tasks.map((tasks) => (
        <AllTaskCard key={tasks.id} tasks={tasks}></AllTaskCard>
      ))}
      </div>
          </TabPanel>
          <TabPanel className="items-center mb-7">
          <div className="">
      {tasks.map((tasks) => (
        <Ongoingcard key={tasks.id} tasks={tasks}></Ongoingcard>
      ))}
      </div>
          </TabPanel>
          <TabPanel className="items-center mb-7">
          <div className="">
      {tasks.map((tasks) => (
        <CompleteCard key={tasks.id} tasks={tasks}></CompleteCard>
      ))}
      </div>
          </TabPanel>
          

        </Tabs>
           
        </div>
    );
};

export default AllTask;