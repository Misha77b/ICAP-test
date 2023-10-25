import React from "react";
import { Box } from "@mui/material";
import { Outlet } from "react-router";
import Header from "../components/header/Header";

const RootRouter = () => {
  return (
    <Box>
      <Header />
      <Outlet />
    </Box>
  );
};

export default RootRouter;
