import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar";
import Footer from "../Pages/Shared/Footer";

const Main = () => {
   return (
      <div>
         <Navbar></Navbar>
         <Outlet></Outlet>
         <div className="mt-5">
         <Footer></Footer>
         </div>
      </div>
   );
};

export default Main;