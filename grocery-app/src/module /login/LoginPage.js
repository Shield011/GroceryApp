import React, { useState } from "react";
import history from "../../history";
import "./LoginPage.css";

function Forms() {
 
  const [input, setInput] = useState();
  const [password, setPassword] = useState();
  const onEmailChange = (e) => {
    setInput(e.target.value);
  };
  const onPasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const clickHandlerLogin = (e) => {
    e.preventDefault();
    let loginCredentials = {
      email: input,
      Loginpassword: password,
      id: Math.floor(Math.random() * 10000),
    };
    localStorage.setItem("loginData", JSON.stringify(loginCredentials));
    history.push("/dashboard");
    console.log("clicked");
    setInput("");
    setPassword("");

    
  };

  return (
      <div className="logIn">
        <h1 className = "page-heading">Welcome!</h1>
        <form className="login-form">
          {/* <img src = {question} alt = "user"></img> */}
          <label className="username-label">Username</label>
          <br></br>
          <input className = 'username-input'
            type="text"
            placeholder="Enter Username"
            value={input}
            onChange={onEmailChange}
          />
          <br></br>
          <label className="password-label">Password</label>
          <br></br>
          <input className = "password-input"
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={onPasswordChange}
          />
          <br></br>
          <button className="submit-button" onClick={clickHandlerLogin}>
            Log In
          </button>
        </form>
      </div>
   
  );
}

export default Forms;