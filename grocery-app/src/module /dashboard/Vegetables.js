import React from "react";
import "./Dashboard.css";

function Vegetables({ vegetablesproducts, onAdd }) {
  return (
    <div className="row-items">
      <img
        className="small"
        src={vegetablesproducts.image}
        alt={vegetablesproducts.name}
      ></img>
      <h3>{vegetablesproducts.name}</h3>
      <div className="price">Rs. {vegetablesproducts.price}</div>
      <div>
        <button
          className="add-to-cart-btn"
          onClick={() => onAdd(vegetablesproducts)}
        >
          {" "}
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default Vegetables;
