import React from "react";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";
import { Box } from "@chakra-ui/react";

const Layout = () => {
  return (
    <>
      <NavBar />
      {/* Wherever Layout is used in routes.tsx, the children element will be substituted into the Outlet component */}
      <Box padding={5}>
        <Outlet />
      </Box>
    </>
  );
};

export default Layout;
