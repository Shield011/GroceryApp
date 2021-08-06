import React, { Component } from "react";
import { Link } from "react-router-dom";
import fruits from "../assests/fruits.jpg";
import vegetables from "../assests/vegetables.jpg";
import snacks from "../assests/snacks.jpg";
import chocolates from "../assests/chocolates.jpg";
import flour from "../assests/flour.jpg";
import household from "../assests/household.jpg";
import beverages from "../assests/beverages.jpg";
import bathroomEssentials from "../assests/bathroomEssentials.jpg";
import all from "../assests/all.png";
import { FaShoppingCart } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { IoLogOut } from "react-icons/io5";
import 'bootstrap/dist/css/bootstrap.css';
import "./navbar.css";

export default class Navbar extends Component {
  render() {

    const logoutHandler = () =>{
      alert("You will be logged out")
    }

    return (
      <>
        <nav className="navbar navbar-expand-sm navbar-dark px-sm-5 navigation">
          <Link to="/dashboard">
            <span className="navbar-brand">Grocery Shop</span>
          </Link>

          <Link to="/cart" className="ml-auto">
            <button className="my-cart">
              <FaShoppingCart className="icons" size="1.2em" />
              My Cart
            </button>
          </Link>
         
          <div className = "dropdown">
          <button className="btn btn-secondary dropdown-toggle account-btn" type = "button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
            {" "}
            <FaUserAlt className="icons" size="1.2em" />
              User
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <Link to ="/profile">
              <li><a class="dropdown-item" href="#">My Account</a></li>
              </Link>
              <Link to = "/">
              <li><a class="dropdown-item" href="#">Login</a></li>
              </Link>
          </ul>

          </div>
          
          
          <Link to = "/">
          <button className="logout-btn" onClick = {logoutHandler} >
            {" "}
            <IoLogOut className="icons" size="1.5em" />
            Logout{" "}
          </button>
          </Link>
        </nav>
        <div className="row-wise">
          <Link to="/productlist" className="link-to">
            <div className="row-wise-display">
              <img className="row-img" src={all} alt="all"></img>
              <br />
              <span className="row-img-description">All</span>
            </div>
          </Link>

          <Link to="/vegetablesdisplay" className="link-to">
            <div className="row-wise-display">
              <img className="row-img" src={vegetables} alt="vegetables"></img>
              <br />
              <span className="row-img-description">Vegetables</span>
            </div>
          </Link>

          <Link to="/fruitsdisplay" className="link-to">
            <div className="row-wise-display">
              <img className="row-img" src={fruits} alt="fruits"></img>
              <br />
              <span className="row-img-description"> Fruits</span>
            </div>
          </Link>

          <Link to="/cookingdisplay" className="link-to">
            <div className="row-wise-display">
              <img
                className="row-img"
                src={flour}
                alt="cooking Essentials"
              ></img>
              <br />
              <span className="row-img-description">Cooking Essentials</span>
            </div>
          </Link>

          <Link to="/snacksdisplay" className="link-to">
            <div className="row-wise-display">
              <img className="row-img" src={snacks} alt="snacks"></img>
              <br />
              <span className="row-img-description">Snacks</span>
            </div>
          </Link>

          <Link to="/householddisplay" className="link-to">
            <div className="row-wise-display">
              <img
                className="row-img"
                src={household}
                alt="household items"
              ></img>
              <br />
              <span className="row-img-description">Household Items</span>
            </div>
          </Link>

          <Link to="/bathroomdisplay" className="link-to">
            <div className="row-wise-display">
              <img
                className="row-img"
                src={bathroomEssentials}
                alt="bathroom essentials"
              ></img>
              <br />
              <span className="row-img-description">Bathroom Essentials</span>
            </div>
          </Link>

          <Link to="/chocolatesdisplay" className="link-to">
            <div className="row-wise-display">
              <img className="row-img" src={chocolates} alt="chocolates"></img>
              <br />
              <span className="row-img-description">Chocolates</span>
            </div>
          </Link>

          <Link to="/beveragesdisplay" className="link-to">
            <div className="row-wise-display">
              <img className="row-img" src={beverages} alt="beverages"></img>
              <br />
              <span className="row-img-description">Beverages</span>
            </div>
          </Link>
        </div>
      </>
    );
  }
}
