import React, { useState } from "react";
import "./cart.css";

function Cart({cartItems}) {

    console.log("l", cartItems.length)
  return (
     <>
       <h2> Cart Items</h2>
    
       {cartItems.length === 0 && <div className = "empty-cart"> Your Cart is Empty</div>}
    
       
      
    </> 
  );
}

export default Cart;
