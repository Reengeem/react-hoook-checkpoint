import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  // Navbar here ===========================================================================
  return (
    <nav className="shadow-md mb-5 p-3 m-2 bg-blue-950 sticky top-0 left-0 right-0 z-10">
      <div className=" flex justify-between items-center max-w-5xl mx-auto px-2">
        <div className="flex items-center justify-start">
          {/* Brand logo here============================================= */}
          <img
            src="https://t3.ftcdn.net/jpg/05/90/75/40/360_F_590754013_CoFRYEcAmLREfB3k8vjzuyStsDbMAnqC.jpg"
            alt="brand logo"
            className="w-20"
          />
          <h2 className="tracking-wide text-gray-50">Movie app</h2>
        </div>
        <div className="flex gap-4">
          <NavLink className=" text-white" to="/movieplace">
            Movieplace
          </NavLink>
          <NavLink className=" text-white" to="/about">
            About Us
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
