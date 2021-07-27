import React from 'react'
import {IoMdCart} from "react-icons/io";
import {BiUserCircle} from "react-icons/bi";
import {GrLogout} from "react-icons/gr";
import "./Navigation.css";

function Navigation() {

    const logoutHandler = () => {
        
        alert("You will be logged out.");
        
    }
    return (
        <div className = "menu-bar">
            <ul className = "menu">
                <li className = "menu-item"><a href="#vegetable">Vegetable</a></li>
                <li className = "menu-item"><a href="#fruits">Fruits</a></li>
                <li className = "menu-item"><a href="#snacks">Snacks</a></li>
                <li className = "menu-item"><a href="#beverages">Beverages</a></li>
                <li className = "menu-item icons" onClick = {logoutHandler}><a href="#logout"><GrLogout size = "1.2em" /></a></li>
                <li className = "menu-item icons"><a href="#user"><BiUserCircle size = "1.2em" /></a></li>
                <li className = "menu-item icons" ><a href="#cart"><IoMdCart size = "1.2em"/> </a></li>

            </ul>
   
            
        </div>
    )
}

export default Navigation
