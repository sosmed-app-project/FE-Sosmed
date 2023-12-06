import React, { useState } from "react";
import Logo from "../assets/social hub.png";
import { useNavigate } from "react-router-dom";

const Navbar = () => {

  const navigate = useNavigate();
  const handleHome = () => {
    navigate("/");   
  };
  
  const handleProfile = () => {
    navigate("/profile");
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <nav className="fixed top-0 left-0 right-0 z-10 flex items-center justify-between bg-gray-100 rounded-lg shadow-md px-4">
      {/* Logo */}
      <div className="flex items-center">
        <img src={Logo} alt="Logo" className="h-20 mr-4" />
        <h1 className="text-lg font-semibold cursor-pointer" onClick={handleHome}>Sosial Hub</h1>
      </div>

      {/* User Profile */}
      <div className="flex items-center">
        <span className="text-sm font-semibold mr-2">Username</span>
        <div className="mr-4">
        <div className="relative">
            <img
              src="https://via.placeholder.com/40"
              alt="Logo"
              className="h-10 my-5  rounded-full cursor-pointer"
              onClick={toggleMenu}
            />

            {isMenuOpen && (
              <div className="absolute top-12 right-0 bg-white shadow-md rounded-md p-2 w-32">
                <ul>
                  <li className="hover:bg-gray-100 rounded-sm cursor-pointer py-2 px-3"onClick={handleProfile}>Profile</li>
                  <li className="hover:bg-gray-100 rounded-sm cursor-pointer py-2 px-3" >Dark Mode</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
