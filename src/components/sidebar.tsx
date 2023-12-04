import React, { ReactNode } from "react";

interface SidebarProps {
  children: ReactNode;
}

const Sidebar = ({ children }: SidebarProps) => {
  return (
    <div className="flex h-screen mt-20">
      <div className="hidden md:block md:w-1/4 bg-gray-100 p-4 overflow-y-auto">
        {/* Sidebar Content */}
        <ul>
          <li className="mb-2">
            <a
              href="#newfeed"
              className="block text-center text-black font-semibold p-3 transition-all duration-300 bg-gray-100 hover:bg-gray-400 hover:border hover:border-gray-400 hover:shadow-md hover:rounded-lg"
            >
              New Feed
            </a>
          </li>
          <li>
            <a
              href="#darkmode"
              className="block text-center text-black font-semibold p-3 transition-all duration-300 bg-gray-100 hover:bg-gray-400 hover:border hover:border-gray-400 hover:shadow-md hover:rounded-lg"
            >
              Dark Mode
            </a>
          </li>
        </ul>
      </div>

      <div className="w-full md:w-1/2 bg-white p-4 overflow-y-auto">{children}</div>

      <div className="hidden md:block md:w-1/4 bg-gray-100 p-4">
        {/* Sidebar Content */}
        <ul>
          <li className="mb-4">
            <a href="#profile" className="text-blue-600 font-semibold">
              Profile
            </a>
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
