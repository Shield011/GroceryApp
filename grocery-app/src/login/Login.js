import React from "react";
import { Link } from "react-router-dom";
import { Formik } from "formik";
import * as EmailValidator from "email-validator";
import * as Yup from "yup";
import "./login.css";

const Login = (props) => (
  <Formik
    initialValues={{ email: "", password: "" }}
    onSubmit={(values, { setSubmitting }) => {
      setTimeout(() => {
        console.log("Logging in", values);
        setSubmitting(false);
      }, 500);
    }}
    

    validationSchema={Yup.object().shape({
      email: Yup.string()
        .email()
        .required("Required"),
      password: Yup.string()
        .required("No password provided.")
        .min(8, "Password is too short - should be 8 chars minimum.")
        .matches(/(?=.*[0-9])/, "Password must contain a number.")

     
    })}


  >
    {props => {
      const {
        values,
        touched,
        errors,
        isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit
      } = props;
      return (
        <div className= "login-page">
        <form  className = "login-form" onSubmit={handleSubmit}>
          <h1 className = "form-title" data-testid = "boxTitle">Login</h1>
          <label data-testid = "email-label" className = "form-label" htmlFor="email">Email</label>
          <input 
            name="email"
            type="text"
            placeholder="Enter your email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.email && touched.email && "error"}
          />
          {errors.email && touched.email && (
            <div className="input-feedback">{errors.email}</div>
          )}
          <label data-testid = "password-label" className = "form-label" htmlFor="email">Password</label>
          <input 
            name="password"
            type="password"
            placeholder="Enter your password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.password && touched.password && "error"} 
          />
          {errors.password && touched.password && (
            <div className="input-feedback">{errors.password}</div>
          )}
          {/* <Link to = "/dashboard"> */}
          <button data-tesid = "login-btn" className = "login-btn" type="submit" disabled={isSubmitting} onClick = {() => {
            localStorage.setItem("email", JSON.stringify(values.email));
            localStorage.setItem("password", JSON.stringify(values.password));
            props.history.push("/dashboard")

          }}>
            Login
          </button>
          {/* </Link> */}
        </form>
        </div>
      );
    }}
  </Formik>
);

export default Login;
