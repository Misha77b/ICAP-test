import React from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { useFormik } from "formik";
import { TextField, Button } from "@mui/material";
import { loginFormStyle, loginBtnStyle } from "./AuthFormStyle";
import { fetchAuth } from "../../store/reducers/authSlice";
import UserTip from "./userTip/UserTip";

const AuthForm = ({ handleOpen }) => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: (values) => {
      dispatch(fetchAuth(values));
    },
  });
  return (
    <form style={loginFormStyle} onSubmit={formik.handleSubmit}>
      {/* Tips for user */}
      <UserTip handleOpen={handleOpen} />

      {/* login inputs */}
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
  );
};

export default AuthForm;

AuthForm.propTypes = {
  handleClose: PropTypes.func,
};
