import React from "react";
import { Box } from "@mui/material";

const Header = () => {
  return (
    <Box
      sx={{
        marginBottom: "30px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "60px",
        background: "white",
        boxShadow:
          "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
      }}
    >
      <img
        style={{ height: "55px" }}
        src="./assets/icap-logo.png"
        alt="icap-logo"
      />
    </Box>
  );
};

export default Header;
