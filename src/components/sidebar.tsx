import  { ReactNode } from "react";
import { Link, useNavigate } from "react-router-dom";

interface SidebarProps {
  children: ReactNode;
}

const Sidebar = ({ children }: SidebarProps) => {
  return (
    <div className="flex h-screen mt-20">
      <div className="hidden md:block md:w-1/4 bg-gray-100 p-4 ">
        {/* Sidebar Content */}
        <ul>
          <li className="mb-2">
            <a
              href="#newfeed"
              className=" block text-start text-black font-semibold p-3 transition-all duration-300 bg-gray-100 hover:bg-gray-400   hover:shadow-md hover:rounded-lg"
            >
              <i className="fa-solid fa-house w-11"> </i> New Feed
            </a>
          </li>
          <li>
            <Link to={"/profile"}
              className="block text-start  text-black font-semibold p-3 transition-all duration-300 bg-gray-100 hover:bg-gray-400   hover:shadow-md hover:rounded-lg"
            >
              <i className="fa-regular fa-circle-user w-11 "></i> Profile
            </Link>
          </li>
          <li>
            <a
              href="#darkmode"
              className="block text-start text-black font-semibold p-3 transition-all duration-300 bg-gray-100 hover:bg-gray-400   hover:shadow-md hover:rounded-lg"
            >
              <i className="fa-solid fa-circle-half-stroke w-11"></i> Dark Mode
            </a>
          </li>
        </ul>
      </div>

      <div className=" w-full md:w-1/2 flex justify-center bg-white p-8 overflow-y-auto">
        {children}
      </div>

      <div className="hidden md:block md:w-1/4 bg-gray-100 p-4">
        {/* Sidebar Content */}
        <ul>
          <li className="mb-4">
            <Link className="text-blue-600 font-semibold" to=" /profile">
              Profile
            </Link>
          </li>
          <li>
            <a href="#settings" className="text-blue-600 font-semibold">
              Settings
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
