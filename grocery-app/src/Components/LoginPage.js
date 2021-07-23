import React, { useState } from "react";
import history from "../history";



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
    history.push("/Dashboard");
    console.log("clicked");
    setInput("");
    setPassword("");

    
  };

  return (
      <div className="LogIn">
        <form className="Login-form">
          <label className="Username-label">Username</label>
          <input
            type="text"
            placeholder="Username"
            value={input}
            onChange={onEmailChange}
          />
          <label className="Password-label">Password</label>
          <input
            type="text"
            placeholder="Password"
            value={password}
            onChange={onPasswordChange}
          />
          <button className="submit-button" onClick={clickHandlerLogin}>
            Log In
          </button>
        </form>
      </div>
   
  );
}

export default Forms;
