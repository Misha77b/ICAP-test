import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Box, Button } from "@mui/material";
import MyModal from "../../components/modal/Modal";
import { loginBoxStyle, goBackBtnStyle } from "./formStyle";
import { useSelector } from "react-redux";
import AuthForm from "../../components/authForm/AuthForm";

const LogIn = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const isAuth = useSelector((state) => state.authReducer.isAuth);
  const loader = useSelector((state) => state.authReducer.loader);
  console.log("auth state", isAuth);
  console.log("loader state", loader);

  return (
    <Box sx={loginBoxStyle}>
      {/* Login tip modal */}
      {open && <MyModal open={open} handleClose={handleClose} />}

      {/* Go back btn */}
      <Button component={Link} to="/" sx={goBackBtnStyle}>
        Go back
      </Button>

      {/* Login from */}
      <AuthForm handleOpen={handleOpen} />
    </Box>
  );
};

export default LogIn;
