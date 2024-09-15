import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Login/Register";
import CheckOut from "../Pages/CheckOut/CheckOut";

const router = createBrowserRouter([
   {
     path: "/",
     element: <Main></Main>,
     children: [
      {
         path: '/',
         element: <Home></Home>,
      },
      {
         path: '/about',
         element: <About></About>,
      },
      {
         path: '/login',
         element: <Login/>
      },
      {
         path: '/register',
         element: <Register/>
      },
      {
         path: '/checkout/:id',
         element: <CheckOut></CheckOut>,
      },
     ]
   },
 ]);

 export  default router