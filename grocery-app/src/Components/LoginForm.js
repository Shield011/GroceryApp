import React from 'react'

function LogInSignUp({}) {
    return (
        <div className = "LogIn">
            <form className ="Login-form">
                <label className = "Username-label">Username</label>
                    <input type = "text" placeholder = "Email/Number" ></input>
                    <label className = "Password-label">Password</label>
                    <input type = "password" placeholder = "Password" ></input>
                    <button className ="submit-button">Submit</button>
               
                </form>            
        </div>
    )
}

export default LogInSignUp
