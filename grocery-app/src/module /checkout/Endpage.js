import React from "react";
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
    </div>
  );
}

export default Endpage;
