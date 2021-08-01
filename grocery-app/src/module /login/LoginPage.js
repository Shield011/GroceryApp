import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./LoginPage.css";

import question from "../../assets/img/question.png";

function Forms() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const onUsernameChange = (e) => {
    setUsername(e.target.value);
  };
  const onPasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const clickHandlerLogin = (e) => {
    e.preventDefault();
    let loginCredentials = {
      email: username,
      Loginpassword: password,
      id: Math.floor(Math.random() * 10000),
    };
    localStorage.setItem("loginData", JSON.stringify(loginCredentials));
    
    console.log("clicked");
    setUsername("");
    setPassword("");
  };

  return (
    <div className="logIn">
      <h1 className="page-heading"></h1>
      <form className="login-form">
        <img src={question} alt="user"></img>
        <br />
        <br />
        <label className="username-label">Username</label>
        <br></br>
        <input
          className="username-input"
          type="text"
          placeholder="Enter Username"
          value={username}
          onChange={onUsernameChange}
        />
        <br></br>
        <label className="password-label">Password</label>
        <br></br>
        <input
          className="password-input"
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={onPasswordChange}
        />
        <br></br>
        <Link to = "/dashboard">
        <button className="login-button" onClick={clickHandlerLogin}>
          Log In
        </button>
        </Link>
      </form>
      <br />
      <br />
    </div>
  );
}

export default Forms;
