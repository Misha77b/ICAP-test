import React from "react";
import { Box } from "@mui/material";
import "./Loader.scss";

const Loader = () => {
  return (
    <Box className="lds-heart">
      <Box className="secondDiv"></Box>
    </Box>
  );
};

export default Loader;
