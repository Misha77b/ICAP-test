import React, { useState, useEffect } from "react";
import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { homeBoxStyle, btnStyle } from "./HomeStyles";

const Home = () => {
  const [authStatus, setAuthStatus] = useState(false);

  const handleLogOut = () => {
    localStorage.removeItem("auth");
    setAuthStatus(false);
  };

  useEffect(() => {
    const auth = localStorage.getItem("auth");
    if (auth) {
      setAuthStatus(true);
    }
  }, [authStatus]);

  return (
    <Box sx={homeBoxStyle}>
      <Typography
        sx={{ fontSize: "24px", fontWeight: "600" }}
        variant="subtitle1"
      >
        {authStatus ? "You are welcome" : "Please log in to continue!"}
      </Typography>

      <Button
        component={Link}
        to={authStatus ? "/table" : "/log-in"}
        sx={btnStyle}
      >
        {authStatus ? "Go to table" : "Log in"}
      </Button>

      {authStatus ? (
        <Button sx={btnStyle} onClick={handleLogOut}>
          Log out
        </Button>
      ) : null}
    </Box>
  );
};

export default Home;
