import React from 'react'
import LoginForm from './LoginForm'
import SignUpForm from './SignUpForm'

function LoginSignUpbuttons( {show, setShow}) {
    return (
        <div className = "startingPage">
            <p>Already a User:</p>
            <button className = "LoginButton" onClick = {() => setShow("active")}>Log In</button>
            <p> New user:</p>
            <button className = "SignUpButton" onClick = {() => setShow("passive")}>Sign Up</button>

            ({show === "active" && (
          <LoginForm />)}
          ({show === "passive" && (
            <SignUpForm />)}
              
        </div>
    )
}

export default LoginSignUpbuttons
