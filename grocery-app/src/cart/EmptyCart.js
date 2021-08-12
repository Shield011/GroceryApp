import React from "react";
import { Link } from "react-router-dom";
import Title from "../components/Title";
import "./cart.css";

export default function EmptyCart({ props }) {
  return (
    <div className="container mt-5">
      <Title name="My" title="Cart" />
      <div className="empty-cart">
        <h1 data-testid="header" className="empty-cart">
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
