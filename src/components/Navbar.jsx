import React from "react";

const Navbar = () => {
  // Navbar here ===========================================================================
  return (
    <nav className="shadow-md p-2 bg-blue-950 ">
      <div className="max-w-4xl mx-auto flex items-center gap-4">
        {/* Brand logo here============================================= */}
        <img src="logo3.jpg" alt="brand logo" className="w-20" />
        <h2 className="tracking-wide text-gray-50">Movie app</h2>
        {/* https://w7.pngwing.com/pngs/400/350/png-transparent-colorflow-film-computer-icons-directory-mymovies-it
        -movies-miscellaneous-text-trademark-thumbnail.png   */}
        {/* ******************************************** */}
      </div>
    </nav>
  );
};

export default Navbar;
