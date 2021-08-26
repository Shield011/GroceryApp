import React from "react";
import Title from "../components/Title";
import "./cart.css";

export default function EmptyCart({ props }) {
  return (
    <div className="empty-container">
      <Title name="My" title="Cart" />
      <div className="empty-cart">
        <h1 className="empty-cart" data-testid="header" >
          Your have no item added in your Cart
        </h1>

        <button
          className="start-shopping"
          onClick={() => {
            props.history.push("/dashboard");
          }}
        >
          Start Shopping
        </button>
      </div>
    </div>
  );
}
