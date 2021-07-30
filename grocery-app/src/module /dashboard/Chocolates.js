import React from "react";
import "./Dashboard.css";

function Chocolates({ chocolatesproducts, onAdd }) {
  return (
    <div className="row-items">
      <img
        className="small"
        src={chocolatesproducts.image}
        alt={chocolatesproducts.name}
      ></img>
      <h3>{chocolatesproducts.name}</h3>
      <div className="price">Rs. {chocolatesproducts.price}</div>
      <div>
        <button
          className="add-to-cart-btn"
          onClick={() => onAdd(chocolatesproducts)}
        >
          {" "}
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default Chocolates;
