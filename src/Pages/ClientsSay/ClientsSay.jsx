import React, { useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";


const ClientsSay = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className=" mt-10 ">
      
      <div className="mt-8 lg:px-28 lg:py-10 p-5 bg-[#F8F7F4] rounded-sm">
      <div>
        <h3 className="lg:text-3xl text-xl font-bold">What Our Clients Say</h3>
      </div>
        <Tabs selectedIndex={activeTab} onSelect={(index) => setActiveTab(index)}>
        <TabPanel className="items-center">
            <h className="text-sm lg:px-20 mb-7">
              When applied to building block a website or similar work product,
              a Visual Guide can be an intermediate step toward the end goal of a
              complete website. By creating a visual guide along the way, the
              designer or developer can get input from the other people involved
              in the website such as the customer, their manager, and other
              members of the team.
            </h>
          </TabPanel>
          <TabPanel className="items-center mb-7">
            <h className="text-sm lg:px-20 ">
            Implementing Visual Guides in our website development has significantly enhanced our workflow. These guides act as a pivotal intermediary, fostering collaboration among our team, clients, and managers. The visual representation not only aids in efficient communication but also facilitates valuable input from all stakeholders. It’s a transformative approach that undoubtedly contributes to the excellence of the final product.
            </h>
          </TabPanel>
          <TabPanel className="items-center mb-7">
            <h className="text-sm lg:px-20 ">
            “n our experience, leveraging Visual Guides during the creation of websites has proven to be a key strategy. These guides serve as an intermediary checkpoint, allowing our designers and developers to gather input from clients, managers, and team members. This collaborative process not only streamlines communication but also ensures that the end product aligns perfectly with the vision and expectations of all stakeholders involved. It’s a practice we highly recommend for a successful and inclusive web development journey.”
            </h>
          </TabPanel>
          <TabList className="relative flex list-none flex-wrap rounded-xl bg-blue-gray-50/60 p-1 text-xl lg:font-bold items-center justify-center">
            <Tab selectedClassName="border-b-2 border-blue-400 text-sm mb-4">
              <p className="text-lg font-bold">Matt Cannon</p>
              <span className="m-4 font-light text-lg">Head of Marketing</span>
            </Tab>
            <Tab selectedClassName="border-b-2 border-blue-400">
              <p className="text-lg font-bold">Sophie Moore</p>
              <span className="m-4 font-light text-lg">Web Designer</span>
            </Tab>
            <Tab selectedClassName="border-b-2 border-blue-400">
            <p className="text-lg font-bold">John Carter</p>
              <span className="m-4 font-light text-lg">Lead Developer</span>
              

            </Tab>
          </TabList>

        </Tabs>
      </div>
      
    </div>
  );
};

export default ClientsSay;
