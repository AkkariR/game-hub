import React from "react";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <NavBar />
      {/* Wherever Layout is used in routes.tsx, the children element will be substituted into the Outlet component */}
      <Outlet />
    </>
  );
};

export default Layout;
