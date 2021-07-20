import React from 'react'

function Forms() {
    return (
        <div>
             <div className = "LogIn">
            <form className ="Login-form">
                <label className = "Username-label">Username</label>
                    <input type = "text" placeholder = "Email/Number" ></input>
                    <label className = "Password-label">Password</label>
                    <input type = "text" placeholder = "Password" ></input>
                    <button className ="submit-button">Submit</button>
               
                </form> 
                </div>    

                <div className = "SignUp">
                <form className ="signUp-form">
                    <label className = "Entername-label">Name</label>
                    <input type = "text" placeholder = "Name"></input>
                    <label className = "CreateUsername-label">Create Username</label>
                    <input type = "text" placeholder = "Email/Number" ></input>
                    <label className = "CreatePassword-label"></label>
                    <input type = "text" placeholder = "Password" >Create Password</input>
                    <button className ="submit-button">Create Account</button>
                
                </form>            
            </div> 
        </div>
    )
}

export default Forms
