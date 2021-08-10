import React from "react";
import { Link } from "react-router-dom";
import Title from "../components/Title";
import "./user.css";

export default function profile() {
  const userEmail = JSON.parse(localStorage.getItem("email"));
  const userPass = JSON.parse(localStorage.getItem("password"));

  return (
    <>
      <div className="profile">
        <Title name="My" title="Account"></Title>
        <div className="profile-details">
          <h3 className="user-email">
            Email: <span className="email-span">{userEmail}</span>
          </h3>
          <h3 className="user-pass">
            Password: <span className="pass-span">{userPass}</span>
          </h3>
          <Link to="/dashboard">
            <button className="user-shopping-btn">Continue Shopping</button>
          </Link>
        </div>
      </div>
    </>
  );
}
