import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: "25px",
      }}
    >
      <Typography variant="h4">Error 404, page not found</Typography>
      <Button
        sx={{
          fontSize: "18px",
          width: "250px",
          "&:hover": { background: "#FBE0DC", color: "#FF868E" },
        }}
        component={Link}
        to="/"
      >
        Home page
      </Button>
    </Box>
  );
};

export default NotFoundPage;
