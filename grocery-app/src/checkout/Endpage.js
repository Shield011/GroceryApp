import React from "react";
import { Link } from "react-router-dom";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import "./checkout.css";

function Endpage() {
  return (
    <div className="endpage">
      <IoCheckmarkDoneCircle size="4em" className="done-icon" />
      <p className="order-received">Order Received</p>
      <p className="delivered-soon">
        Your ordered will be delivered soon to your given address
      </p>

      <Link to="/dashboard">
        <button className="continue-shopping"> Continue Shopping</button>
      </Link>
    </div>
  );
}

export default Endpage;
