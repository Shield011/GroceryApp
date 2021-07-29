import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import Navigation from "../../components/Navigation";
import Vegetables from "./Vegetables";
import Fruits from "./Fruits";
import Snacks from "./Snacks";
import Beverages from "./Beverages";
import Cooking from "./Cooking";
import Bathroom from "./Bathroom";
import Chocolates from "./Chocolates";
import Household from "./Household";
import HouseholdData from "../../common/HouseholdData";
import ChocolatesData from "../../common/ChocolatesData";
import CookingData from "../../common/CookingData";
import BathroomData from "../../common/BathroomData";
import VegetablesData from "../../common/VegetablesData";
import FruitsData from "../../common/FruitsData";
import SnacksData from "../../common/SnacksData";
import BeveragesData from "../../common/BeveragesData";
import "./Dashboard.css";
import Cart from "../cart/Cart";
import User from "../user-profile/User";
import { IoMdCart } from "react-icons/io";
import { BsSearch } from "react-icons/bs";
import { BiUserCircle } from "react-icons/bi";
import { GrLogout } from "react-icons/gr";

function Dashboard() {
  const { vegetablesproducts } = VegetablesData;
  const { fruitsproducts } = FruitsData;
  const { snacksproducts } = SnacksData;
  const { beveragesproducts } = BeveragesData;
  const {cookingproducts} = CookingData;
  const {bathroomproducts} = BathroomData;
  const {householdproducts} = HouseholdData;
  const {chocolatesproducts} = ChocolatesData;

  const [cartItems, setCartItems] = useState([]);

  const onAdd = (product) => {
    console.log("yo");
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
    
  const onDelete = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };


 
 

 

  const logoutHandler = () => {
    alert("You will be logged out.");
  };

  return (
    <div>
      <header className="header">
        <span className="dashboard-heading">Grocery Shop</span>
        <form className="search-form">
          <input
            className="search-input"
            type="text"
            placeholder="Search.."
            name="search"
          ></input>
          <button className="search-btn" type="submit">
            <BsSearch size="1em" className="search-icon" />
          </button>
        </form>

        <button className="my-account-btn">
          {" "}
          <BiUserCircle className="account-icon" size="1.5em" />
          <span className="my-account">My Account</span>
        </button>
        <button className="my-cart-btn">
          {" "}
          <IoMdCart className="cart-icon" size="1.5em" />{" "}
          <span className="my-cart">My Cart</span>
        </button>
        <button className="logout-btn" onClick={logoutHandler}>
          <GrLogout className="logout-icon" size="1.5em" />
          <span className="logout">Logout</span>
        </button>
      </header>

   
      <Navigation />
      <br />
      <main className="product-list">
        <div className="row">
          {vegetablesproducts.map((vegetablesproducts) => (
            <Vegetables
              cartItems={cartItems}
              setCartItems={setCartItems}
              key={vegetablesproducts.id}
              vegetablesproducts={vegetablesproducts}
              onAdd={onAdd}
            ></Vegetables>
          ))}
        </div>
        <div className="row">
          {fruitsproducts.map((fruitsproducts) => (
            <Fruits
              key={fruitsproducts.id}
              fruitsproducts={fruitsproducts}
              onAdd={onAdd}
            ></Fruits>
          ))}
        </div>
        <div className="row">
          {cookingproducts.map((cookingproducts) => (
            <Cooking
              cartItems={cartItems}
              setCartItems={setCartItems}
              key={cookingproducts.id}
              cookingproducts={cookingproducts}
              onAdd={onAdd}
            ></Cooking>
          ))}
        </div>
        <div className="row">
          {snacksproducts.map((snacksproducts) => (
            <Snacks
              key={snacksproducts.id}
              snacksproducts={snacksproducts}
              onAdd={onAdd}
            ></Snacks>
          ))}
        </div>
        <div className="row">
          {beveragesproducts.map((beveragesproducts) => (
            <Beverages
              key={beveragesproducts.id}
              beveragesproducts={beveragesproducts}
              onAdd={onAdd}
            ></Beverages>
          ))}
        </div>
        <div className="row">
          {bathroomproducts.map((bathroomproducts) => (
            <Bathroom
              cartItems={cartItems}
              setCartItems={setCartItems}
              key={bathroomproducts.id}
              bathroomproducts={bathroomproducts}
              onAdd={onAdd}
            ></Bathroom>
          ))}
        </div>
        <div className="row">
          {householdproducts.map((householdproducts) => (
            <Household
              cartItems={cartItems}
              setCartItems={setCartItems}
              key={householdproducts.id}
              householdproducts={householdproducts}
              onAdd={onAdd}
            ></Household>
          ))}
        </div>
        <div className="row">
          {chocolatesproducts.map((chocolatesproducts) => (
            <Chocolates
              cartItems={cartItems}
              setCartItems={setCartItems}
              key={chocolatesproducts.id}
              chocolatesproducts={chocolatesproducts}
              onAdd={onAdd}
            ></Chocolates>
          ))}
        </div>
        
        
      </main>
      <Cart cartItems={cartItems} onAdd = {onAdd} onDelete = {onDelete} />
      <User />
    </div>
  );
}

export default Dashboard;
