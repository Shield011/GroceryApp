import React, { useState } from "react";
import "./cart.css";
import { AiTwotoneDelete } from "react-icons/ai";
import { FaPlus } from "react-icons/fa";

function Cart({ cartItems, onAdd, onDelete }) {
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const taxPrice = itemsPrice * 0.14;
  const shippingPrice = 0;
  const totalPrice = itemsPrice + taxPrice + shippingPrice;

  return (
    <>
      <h2> Cart Items</h2>

      {cartItems.length === 0 && (
        <div className="empty-cart"> Your Cart is Empty</div>
      )}
      {cartItems.map((item) => (
        <div key={item.id} className="item-list">
          <img
            className="item-image list"
            src={item.image}
            alt={item.name}
          ></img>
          <div className="item-name list">{item.name}</div>
          <div className="item-qty list">Qty: {item.qty}</div>
          <div className="item-price list">
            Rs. {item.price.toFixed(2)} * {item.qty}{" "}
          </div>
          <button className="add-btn" onClick={() => onAdd(item)}>
            <FaPlus />
          </button>
          <button className="remove-btn" onClick={() => onDelete(item)}>
            <AiTwotoneDelete />
          </button>
        </div>
      ))}

      {cartItems.length !== 0 && (
        <>
          <hr></hr>
          <div className="bill">
            <div className="items">Items Price</div>
            <div className="prices">Rs. {itemsPrice.toFixed(2)}</div>
          </div>
          <div className="bill">
            <div className="items">Tax Price</div>
            <div className="prices">Rs. {taxPrice.toFixed(2)}</div>
          </div>
          <div className="bill">
            <div className="items">Shipping Price</div>
            <div className="prices">Rs. {shippingPrice.toFixed(2)}</div>
          </div>
          <hr />
          <div className="bill">
            <div className="total">Total Price</div>
            <div className="total-price">Rs. {totalPrice.toFixed(2)}</div>
          </div>
          <hr />
          <button className="checkout-btn">Checkout</button>
        </>
      )}
    </>
  );
}

export default Cart;
