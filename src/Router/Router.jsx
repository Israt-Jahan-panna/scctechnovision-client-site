import {
    createBrowserRouter
    
  } from "react-router-dom";
import Roots from "../Compunents/Layout/Roots";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import Team from "../Pages/Team/Team";
import ClientsSay from "../Pages/ClientsSay/ClientsSay";
import Features from "../Pages/Features/Features";
import Login from "../Pages/Login/Login";
import Registrations from "../Pages/Registrations/Registrations";
import Dashboard from "../Compunents/Layout/Dashboard";
import AccessControl from "../Pages/AccessControl/AccessControl";
import TaskCreation from "../Pages/TaskCreation/TaskCreation";
import AllTask from "../Pages/AllTask/AllTask";
import MyTask from "../Pages/MyTask/MyTask";
const router = createBrowserRouter([
    {
      path: "/",
    element: <Roots></Roots>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element:<Home></Home>,
      },
      
      {
        path: "/team",
        element:<Team></Team>,
      },
      {
        path: "/feedback",
        element:<ClientsSay></ClientsSay>,
      },
      {
        path: "/features",
        element:<Features></Features>,
      },
      {
        path: "/login",
        element:<Login></Login>,
      },
      {
        path: "/registration",
        element:<Registrations></Registrations>,
      }
    ],
  },
  {
    path: "dashboard",
    element:<Dashboard></Dashboard>,
    children: [
      {
        path: "taskcreation",
        element:<TaskCreation></TaskCreation> ,
      },
      {
        path: "accesscontrol",
       element:<AccessControl></AccessControl>,
      },
      {
        path:"alltask",
        element:<AllTask></AllTask>,
      },
      {
        path:"mytask",
        element:<MyTask></MyTask>,
      },
    ],
  },
 
  ]);
  export default router;