import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Root = () => {
  return (
    <div className="dark:bg-white">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
