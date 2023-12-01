import { Button } from "antd";
import React from "react";
import { NavLink, Outlet } from "react-router-dom";

// MovieplaceLayout component serves as a layout for Movieplace-related pages
const MovieplaceLayout = () => {
  return (
    <div>
      {/* Outlet renders the nested routes/components for this layout */}
      <Outlet />
    </div>
  );
};

export default MovieplaceLayout;
