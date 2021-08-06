import React from "react";
import { FaTrash } from "react-icons/fa";
import {FaPlus} from "react-icons/fa";
import {HiMinusSm} from "react-icons/hi"
import "./cart.css";

export default function CartItem({ item, value }) {
  const { id, name, image, price, total, count } = item;
  const { increment, decrement, removeFromCart } = value;
  return (
    <div className = "non-empty-cart">
      

    <div className="row my-1 text-center cart-container">
      <div className="col-10 mx-auto col-lg-2">
        <img src={image} className="cart-image" alt="product"></img>
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <span className="cart-item-name">Product : {name}</span>
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <span className="cart-item-price">Price : Rs. {price}</span>
      </div>

      <div className="col-10 mx-auto col-lg-2">
        <span className="cart-item-qty">Qty : {count}</span>
      </div>

      <div classname="qty-change-btn">
        <button className="decrement-btn" onClick={() => decrement(id)}>
          <HiMinusSm />
        </button>
        <button className="increment-btn" onClick={() => increment(id)}>
          < FaPlus />
        </button>
      </div>
      <div className="remove-item">
        <button className="remove-item-btn" onClick={() => removeFromCart(id)}>
          <FaTrash />
        </button>
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <span className="cart-item-total">Total : Rs. {total}</span>
      </div>
    </div>
    </div>
  );
}
