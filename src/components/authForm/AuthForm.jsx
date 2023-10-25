import React from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { useFormik } from "formik";
import * as Yup from "yup";
import { TextField, Button } from "@mui/material";
import { loginFormStyle, submitBtnStyle } from "./AuthFormStyle";
import { fetchAuth } from "../../store/reducers/authSlice";
import UserTip from "./userTip/UserTip";
import Loader from "../loader/Loader";
import { Link } from "react-router-dom";

const SignupSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  password: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

const AuthForm = ({ isAuth, loader, handleOpen }) => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: SignupSchema,
    onSubmit: (values) => {
      dispatch(fetchAuth(values));
    },
  });

  return (
    <form style={loginFormStyle} onSubmit={formik.handleSubmit}>
      {/* Tips for user */}
      <UserTip handleOpen={handleOpen} />
      {loader ? (
        <Loader />
      ) : (
        <>
          {/* login inputs */}
          <TextField
            fullWidth
            id="username"
            name="username"
            type="username"
            label="User name"
            onChange={formik.handleChange}
            value={formik.values.username}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />

          <TextField
            fullWidth
            id="password"
            name="password"
            type="password"
            label="Password"
            onChange={formik.handleChange}
            value={formik.values.password}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
          {isAuth ? (
            <Button component={Link} to="/table" sx={submitBtnStyle}>
              Go to table
            </Button>
          ) : (
            <Button sx={submitBtnStyle} type="submit">
              Submit
            </Button>
          )}
        </>
      )}
    </form>
  );
};

export default AuthForm;

AuthForm.propTypes = {
  isAuth: PropTypes.bool,
  loader: PropTypes.bool,
  handleClose: PropTypes.func,
};
