import React, { useContext } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';


const Dashboard = () => {
  // TODO get isAdmin value from the database 
  const { user, loading } = useContext(AuthContext);
  console.log(user)
  return (
    <div className="min-h-screen bg-black flex font-Barlow">
    {/*dashboard  Sidebar */}
    <div className="w-64 bg-[#458682]  ml-5  pt-10 ">
      <h1 className="text-2xl font-extrabold mb-4 w-64 px-8 text-black ">Surveyor Dashboard</h1>
      <ul className="px-8 text-lg ">
       
          <li className="mb-2 bg-white p-1 text-center font-semibold rounded-lg">
            <NavLink
              to="accesscontrol"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? " hover:text-[#458682] underline" : ""
              }
            >
              <i className="fa-solid fa-user-lock mr-2" style={{ color: ' #458682' }}></i> Users
            </NavLink>
          </li>
          <li className="mb-2 bg-white p-1 text-center font-semibold rounded-lg">
            <NavLink
              to="accesscontrol"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? " hover:text-[#458682] underline" : ""
              }
            >
              <i className="fa-solid fa-user-lock mr-2" style={{ color: ' #458682' }}></i> My Task
            </NavLink>
          </li>
       
        
          <li className="mb-2 bg-white p-1 text-center font-semibold rounded-lg">
            <NavLink
              to="surveycreation"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? " hover:text-[#458682] underline" : ""
              }
            >
              <i className="fa-brands fa-wpforms mr-2" style={{ color: ' #458682' }}></i> Task Creation
            </NavLink>
          </li>
          <li className="mb-2 bg-white p-1 text-center font-semibold rounded-lg">
          <a className="text-lg  text-black hover:text-[#458682]" href="#">
            <NavLink
              to="/surveys"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? " hover:text-[#458682] underline" : ""
              }
            >
              <i className="fa-solid fa-square-poll-vertical mr-2" style={{ color: ' #458682' }}></i> All Task
            </NavLink>
          </a>
        </li>
      </ul>
      <div className="divider"></div>
      <ul className="px-8">
        <li className="mb-2 bg-white p-1 text-center font-semibold rounded-lg">
          <a className="text-lg  text-black hover:text-[#458682]" href="#">
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? " hover:text-[#458682] underline" : ""
              }
            >
              <i className="fa-solid fa-house mr-2" style={{ color: ' #458682' }}></i> Home
            </NavLink>
          </a>
        </li>
        
      </ul>
    </div>

    {/* Main Content */}
    <div className="flex-1">
      <h2 className="text-3xl font-bold text-[#458682] bg-white  p-8 mb-4 text-center">Welcome to the Dashboard!</h2>
      <Outlet></Outlet>
    </div>
  </div>
  );
};

export default Dashboard;
