import React from "react";
import "./Dashboard.css";

function Beverages({ beveragesproducts, onAdd }) {
  return (
    <div className="row-items">
      <img
        className="small"
        src={beveragesproducts.image}
        alt={beveragesproducts.name}
      ></img>
      <h3>{beveragesproducts.name}</h3>
      <div className="price">Rs. {beveragesproducts.price}</div>
      <div>
        <button
          className="add-to-cart-btn"
          onClick={() => onAdd(beveragesproducts)}
        >
          {" "}
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default Beverages;
