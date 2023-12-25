import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext) || {};

  const handelSingOut = () => {
    logOut();
  };

  const [isDropdownOpen, setDropdownOpen] = useState(false);

  // Function to toggle the dropdown
  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };
  return (
    <div className="max-w-[1600px] mx-auto font-OpenSans">
      <div className="navbar bg-white w-full shadow-md rounded-lg ">
        <div className="navbar-start">
        <div className="flex items-center h-5 w-52">
		<img className="lg:h-20 lg:w-72" src="https://i.ibb.co/HLSSKDr/1-Logo.png" alt="" />
        
		</div>
          <div className="dropdown ">
            <label tabIndex={0} className="lg:hidden " onClick={toggleDropdown}>
            <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
            </label>
            { isDropdownOpen && <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2   w-52"
            >
               <li>
            <a className="text-lg  text-black hover:text-[#e6e641e7]" href="#">
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? " hover:text-[#e6e641e7] underline"
                    : ""
                }
              >
                Home
              </NavLink>
            </a>
          </li>
            
          <li>
            <a className="text-lg  text-black hover:text-[#e6e641e7]" href="#">
              <NavLink
                to="/feedback"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? " hover:text-[#e6e641e7] underline"
                    : ""
                }
              >
             FeedBack 
              </NavLink>
            </a>
          </li>
            
          <li>
            <a className="text-lg  text-black hover:text-[#e6e641e7]" href="#">
              <NavLink
                to="/features"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? " hover:text-[#e6e641e7] underline"
                    : ""
                }
              >
               Features 
              </NavLink>
            </a>
          </li>
          <li>
            <a className="text-lg  text-black hover:text-[#e6e641e7]" href="#">
              <NavLink
                to="/dashboard"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? " hover:text-[#e6e641e7] underline"
                    : ""
                }
              >
               Dashboard
              </NavLink>
            </a>
          </li>
          <li>
            <a className="text-lg  text-black hover:text-[#e6e641e7]" href="#">
              <NavLink
                to="/team"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? " hover:text-[#e6e641e7] underline"
                    : ""
                }
              >
               Team
              </NavLink>
            </a>
          </li>
         
            </ul>}
            
          </div>
          
        </div>
        <div className="navbar hidden lg:flex items-center">
          <ul className="gap-10 menu-horizontal ">
          <li>
            <a className="text-lg font-bold w-10 text-black hover:text-[#e6e641e7]" href="#">
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? " hover:text-[#e6e641e7] underline"
                    : ""
                }
              >
                Home
              </NavLink>
            </a>
          </li>
          
          <li>
            <a className="text-lg font-bold text-black hover:text-[#e6e641e7]" href="#">
              <NavLink
                to="/feedback"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? " hover:text-[#e6e641e7] underline"
                    : ""
                }
              >
               FeedBack
              </NavLink>
            </a>
          </li>
          
         
          
          <li>
            <a className="text-lg font-bold text-black hover:text-[#e6e641e7]" href="#">
              <NavLink
                to="/features"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? " hover:text-[#e6e641e7] underline"
                    : ""
                }
              >
                Features
              </NavLink>
            </a>
          </li>

          <li>
            <a className="text-lg font-bold text-black hover:text-[#e6e641e7]" href="#">
            <NavLink
                to="/dashboard"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? " hover:text-[#e6e641e7] underline"
                    : ""
                }
              >
               Dashboard
              </NavLink>
            </a>
          </li>
          <li>
            <a className="text-lg font-bold text-black hover:text-[#e6e641e7]" href="#">
              <NavLink
                to="/team"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? " hover:text-[#e6e641e7] underline"
                    : ""
                }
              >
              Team
              </NavLink>
            </a>
          </li>
         
          </ul>
        </div>
        {user ? (
          <div className="navbar-end  gap-4 
          ">
            <img className="rounded-sm w-8 h-12" src={user.photoURL} alt="" />
            <p className="text-xs ">{user.displayName}</p>
           <Link to={"/home"}>
           <button onClick={handelSingOut} className=" mb-2 rounded-lg bg-gradient-to-tr bg-[#e6e641e7] p-2 lg:py-2 lg:px-6  text-xs  uppercase text-black shadow-md   transition-all hover:shadow-lg   active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
              Sing Out
            </button></Link>
          </div>
        ) : (
          <div className="navbar-end  gap-4 
          ">
            <Link to={"/registration"}>
              <a className=" mb-2  rounded-lg bg-gradient-to-tr bg-[#d8d8d3e7] p-2 lg:py-2 lg:px-6  text-xs  uppercase text-black shadow-md   transition-all hover:shadow-lg   active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">Registration</a>
            </Link>
            <Link to={"/login"}>
              <a className=" mb-2  rounded-lg bg-gradient-to-tr bg-[#d8d8d3e7] p-2 lg:py-2 lg:px-6  text-xs  uppercase text-black shadow-md   transition-all hover:shadow-lg   active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">Log In</a>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;