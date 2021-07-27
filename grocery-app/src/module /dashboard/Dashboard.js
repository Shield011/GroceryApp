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
  
  const {vegetablesproducts} = VegetablesData;
  const {fruitsproducts} = FruitsData;
  const {snacksproducts} = SnacksData;
  const {beveragesproducts} = BeveragesData;
  const[cartItems, setCartItems] = useState([]);


  const onAdd = (product) => {
    console.log("yo");
    setCartItems([...cartItems, product]);

  }

  
  
  return (
    <div>
      <header>
        <p> Welcome to Grocery Shop!</p>
      </header>
      <Navigation />
      <main className = "block col-2">
      <h2 className = "product-name"> Vegetables </h2>
      < div className = "row">
        {vegetablesproducts.map((vegetablesproducts) => (
          <Vegetables  key = {vegetablesproducts.id} vegetablesproducts = {vegetablesproducts} onAdd = {onAdd}></Vegetables>

        ))}
      </div>
      <h2 className = "product-name"> Fruits </h2>
      <div className = "row">
        {fruitsproducts.map((fruitsproducts) => (
          <Fruits key = {fruitsproducts.id} fruitsproducts = {fruitsproducts} onAdd = {onAdd}></Fruits>

        ))}
      </div>
      <h2 className = "product-name">Snacks</h2>
      <div className = "row">
        {snacksproducts.map((snacksproducts) => (
          <Snacks key = {snacksproducts.id} snacksproducts = {snacksproducts} onAdd = {onAdd}></Snacks>

        ))}
      </div>
      <h2 className = "product-name">Beverages</h2>
      <div className = "row">
        {beveragesproducts.map((beveragesproducts) => (
          <Beverages key = {beveragesproducts.id} beveragesproducts = {beveragesproducts} onAdd = {onAdd}></Beverages>

        ))}
      </div>

      </main>
      <Cart cartItems = {cartItems} />
     
    </div>
  );
}

export default Dashboard ;
