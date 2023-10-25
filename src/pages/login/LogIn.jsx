import React from "react";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import { Box, TextField, Button, Tooltip } from "@mui/material";
import {
  loginBoxStyle,
  goBackBtnStyle,
  loginFormStyle,
  loginBtnStyle,
} from "./formStyle";

const LogIn = () => {
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Box sx={loginBoxStyle}>
      {/* Go back btn */}
      <Button component={Link} to="/" sx={goBackBtnStyle}>
        Go back
      </Button>

      {/* Login from */}
      <form style={loginFormStyle} onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          id="username"
          name="username"
          type="username"
          label="User name"
          onChange={formik.handleChange}
          value={formik.values.username}
        />

        <TextField
          fullWidth
          id="password"
          name="password"
          type="password"
          label="Password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />

        <Button sx={loginBtnStyle} type="submit">
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default LogIn;
