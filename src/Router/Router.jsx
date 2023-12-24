import {
    createBrowserRouter
    
  } from "react-router-dom";
import Roots from "../Compunents/Layout/Roots";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
const router = createBrowserRouter([
    {
      path: "/",
    element: <Roots></Roots>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element:<Home></Home>,
      }
      
    ],
  },
 
  ]);
  export default router;