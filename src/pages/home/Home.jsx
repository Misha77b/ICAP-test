import React, { useState, useEffect } from "react";
import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const homeBoxStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "30px",
  height: "90vh",
};

const Home = () => {
  return (
    <Box sx={homeBoxStyle}>
      <Typography
        sx={{ fontSize: "24px", fontWeight: "600" }}
        variant="subtitle1"
      >
        Please log in to continue!
      </Typography>
      <Button
        component={Link}
        to="/log-in"
        sx={{
          fontSize: "18px",
          width: "250px",
          "&:hover": { background: "#FBE0DC", color: "#FF868E" },
        }}
      >
        Log in
      </Button>
    </Box>
  );
};

export default Home;
