import React from "react";
import Logo from "../assets/social hub.png";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-10 flex items-center justify-between bg-gray-100 rounded-lg shadow-md px-4">
      {/* Logo */}
      <div className="flex items-center">
        <img src={Logo} alt="Logo" className="h-20 mr-4" />
        <h1 className="text-lg font-semibold">Sosial Hub</h1>
      </div>

      {/* User Profile */}
      <div className="flex items-center">
        <span className="text-sm font-semibold mr-2">Username</span>
        <div className="mr-4">
          <img src="https://via.placeholder.com/40" className="h-10 rounded-full" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
