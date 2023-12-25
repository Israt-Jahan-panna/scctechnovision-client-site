import {
    createBrowserRouter
    
  } from "react-router-dom";
import Roots from "../Compunents/Layout/Roots";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import Team from "../Pages/Team/Team";
import ClientsSay from "../Pages/ClientsSay/ClientsSay";
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
      }
    ],
  },
 
  ]);
  export default router;