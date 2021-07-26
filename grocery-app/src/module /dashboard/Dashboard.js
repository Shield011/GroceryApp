import React, {useState} from "react";
import {withRouter} from 'react-router-dom';
import Navigation from "../../components/Navigation";
import Vegetables from "./Vegetables";
import Fruits from "./Fruits";
import Snacks from "./Snacks";
import Beverages from "./Beverages"
import VegetablesData from "../../common/VegetablesData";
import FruitsData from "../../common/FruitsData";
import SnacksData from "../../common/SnacksData";
import BeveragesData from "../../common/BeveragesData";
import "./Dashboard.css";
import Cart from "../cart/Cart";



function Dashboard() {
  // const {Vegetablesproducts} = props;
  // const {Fruitsproducts} = props;
  // const {Snacksproducts} = props;
  // const {Beveragesproducts} = props;
  const {Vegetablesproducts} = VegetablesData;
  const {Fruitsproducts} = FruitsData;
  const {Snacksproducts} = SnacksData;
  const {Beveragesproducts} = BeveragesData;
  const[cartItems, setCartItems] = useState([]);

  
  
  return (
    <div>
      <header>
        <p> Welcome to Grocery Shop!</p>
      </header>
      <Navigation />
      <main className = "block col-2">
      <h2 className = "product-name"> Vegetables </h2>
      < div className = "row">
        {Vegetablesproducts.map((Vegetablesproducts) => (
          <Vegetables  key = {Vegetablesproducts.id} Vegetablesproducts = {Vegetablesproducts}></Vegetables>

        ))}
      </div>
      <h2 className = "product-name"> Fruits </h2>
      <div className = "row">
        {Fruitsproducts.map((Fruitsproducts) => (
          <Fruits cartItems = {cartItems} setCartItems = {setCartItems} key = {Fruitsproducts.id} Fruitsproducts = {Fruitsproducts}></Fruits>

        ))}
      </div>
      <h2 className = "product-name">Snacks</h2>
      <div className = "row">
        {Snacksproducts.map((Snacksproducts) => (
          <Snacks cartItems = {cartItems} setCartItems = {setCartItems} key = {Snacksproducts.id} Snacksproducts = {Snacksproducts}></Snacks>

        ))}
      </div>
      <h2 className = "product-name">Beverages</h2>
      <div className = "row">
        {Beveragesproducts.map((Beveragesproducts) => (
          <Beverages cartItems = {cartItems} setCartItems = {setCartItems} key = {Beveragesproducts.id} Beveragesproducts = {Beveragesproducts}></Beverages>

        ))}
      </div>

      </main>
      <Cart cartItems = {cartItems} setCartItems = {setCartItems}/>
     
    </div>
  );
}

export default Dashboard ;
