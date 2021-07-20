import React from 'react'

function SignUpForm() {
    return (
        <div>
              <div className = "SignUp">
            <form className ="signUp-form">
                <label className = "Entername-label">Name</label>
                        <input type = "text" placeholder = "Name"></input>
                    <label className = "CreateUsername-label">Create Username</label>
                        <input type = "text" placeholder = "Email/Number" ></input>
                        <label className = "CreatePassword-label"></label>
                        <input type = "password" placeholder = "Password" >Create Password</input>
                        <button className ="submit-button">Create Account</button>
                
                </form>            
            </div>

        </div>
    )
}

export default SignUpForm
