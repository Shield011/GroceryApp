import React, { useState } from "react";
import { Link } from "react-router-dom";
import vegetables from "../assets/img/vegetables.jpg";
import fruits from "../assets/img/fruits.jpg";
import flour from "../assets/img/flour.jpg";
import snacks from "../assets/img/snacks.jpg";
import household from "../assets/img/household.jpg";
import chocolates from "../assets/img/chocolates.jpg";
import beverages from "../assets/img/beverages.jpg";
import bathroomEssentials from "../assets/img/bathroomEssentials.jpg";
import { IoMdCart } from "react-icons/io";
import { BsSearch } from "react-icons/bs";
import { BiUserCircle } from "react-icons/bi";
import { GrLogout } from "react-icons/gr";
import "./Navigation.css";
import VegetablesData from "../common/VegetablesData";
import FruitsData from "../common/FruitsData";
import SnacksData from "../common/SnacksData";
import BeveragesData from "../common/BeveragesData";
import HouseholdData from "../common/HouseholdData";
import ChocolatesData from "../common/ChocolatesData";
import BathroomData from "../common/BathroomData";
import CookingData from "../common/CookingData";

function Navigation({ cartItems, setCartItems, onAdd, onDelete }) {
  const { vegetablesproducts } = VegetablesData;
  const { fruitsproducts } = FruitsData;
  const { snacksproducts } = SnacksData;
  const { beveragesproducts } = BeveragesData;
  const { householdproducts } = HouseholdData;
  const { chocolatesproducts } = ChocolatesData;
  const { bathroomproducts } = BathroomData;
  const { cookingproducts } = CookingData;

  const [searchInput, setSearchInput] = useState();
  const logoutHandler = () => {
    alert("You will be logged out.");
  };

  let tempProduct = [];

  const onSearch = (e) => {
    setSearchInput(e.target.value);
    console.log("search", searchInput);
  };

  const searchHandler = (e) => {
    e.preventDefault();
    while (searchInput.length > 0) {
      for (let i of vegetablesproducts) {
        if (i.name.includes(searchInput)) {
          tempProduct.push(i);
        }
      }
    }
  };

  console.log("tempProduct", tempProduct);

  return (
    <>
      <header className="header">
        <Link to="/dashboard">
          <button className="dashboard-btn">Grocery Shop</button>
        </Link>
        <form className="search-form">
          <input
            className="search-input"
            type="text"
            placeholder="Search.."
            name="search"
            value={searchInput}
            onChange={onSearch}
          ></input>
          <button className="search-btn" type="submit" onClick={searchHandler}>
            <BsSearch size="1em" className="search-icon" />
          </button>
        </form>

        <Link to="/user" className="linked">
          <button className="my-account-btn">
            {" "}
            <BiUserCircle className="account-icon" size="1.5em" />
            <span className="my-account">My Account</span>
          </button>
        </Link>

        <Link to="/cart" className="linked">
          <button className="my-cart-btn">
            {" "}
            <IoMdCart className="cart-icon" size="1.5em" />{" "}
            <span className="mycart">My Cart</span>
          </button>
        </Link>
        <Link to="/login" className="linked">
          <button className="logout-btn" onClick={logoutHandler}>
            <GrLogout className="logout-icon" size="1.5em" />
            <span className="logout">Logout</span>
          </button>
        </Link>
      </header>

      <div className="row-wise">
        <Link to="/vegetablesdisplay" className="link-to">
          <div className="row-wise-display">
            <img className="row-img" src={vegetables} alt="vegetables"></img>
            <span className="row-img-description">Vegetables</span>
          </div>
        </Link>

        <Link to="/fruitsdisplay" className="link-to">
          <div className="row-wise-display">
            <img className="row-img" src={fruits} alt="fruits"></img>
            <span className="row-img-description"> Fruits</span>
          </div>
        </Link>

        <Link to="/cookingdisplay" className="link-to">
          <div className="row-wise-display">
            <img className="row-img" src={flour} alt="cooking Essentials"></img>
            <span className="row-img-description">Cooking Essentials</span>
          </div>
        </Link>

        <Link to="/snacksdisplay" className="link-to">
          <div className="row-wise-display">
            <img className="row-img" src={snacks} alt="snacks"></img>
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
            <span className="row-img-description">Bathroom Essentials</span>
          </div>
        </Link>

        <Link to="/chocolatesdisplay" className="link-to">
          <div className="row-wise-display">
            <img className="row-img" src={chocolates} alt="chocolates"></img>
            <span className="row-img-description">Chocolates</span>
          </div>
        </Link>

        <Link to="/beveragesdisplay" className="link-to">
          <div className="row-wise-display">
            <img className="row-img" src={beverages} alt="beverages"></img>
            <span className="row-img-description">Beverages</span>
          </div>
        </Link>
      </div>
    </>
  );
}

export default Navigation;
