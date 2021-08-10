import React, { useState } from "react";
import Title from "../components/Title";
import "./checkout.css";


function Checkout(props) {
  const [fullname, setFullName] = useState();
  const [email, setEmail] = useState();
  const [fulladdress, setFullAddress] = useState();
  const [city, setCity] = useState();
  const [state, setState] = useState();
  const [pincode, setPincode] = useState();

  const onFullNameChange = (e) => {
    setFullName(e.target.value);
  };

  const onEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const onFullAddressChange = (e) => {
    setFullAddress(e.target.value);
  };

  const onCityChange = (e) => {
    setCity(e.target.value);
  };

  const onStateChange = (e) => {
    setState(e.target.value);
  };

  const onPincodeChange = (e) => {
    setPincode(e.target.value);
  };

  const checkoutHandler = (e) => {
    e.preventDefault();
    localStorage.setItem("name", JSON.stringify(fullname));
    localStorage.setItem("emailId", JSON.stringify(email));
    localStorage.setItem("address", JSON.stringify(fulladdress));
    localStorage.setItem("city", JSON.stringify(city));
    localStorage.setItem("state", JSON.stringify(state));
    localStorage.setItem("pincode", JSON.stringify(pincode));
    props.history.push("/endpage");
    setFullName("");
    setFullAddress("");
    setEmail("");
    setState("");
    setCity("");
    setPincode("");
  };

  return (
    <div>
      <Title name = "Billing" title = "details" />
      
      <form className = "checkout-form">
        <div className="billing-details">
          <label className="input-label">Full Name</label>
          <input
            className="input-field"
            type="text"
            value={fullname}
            onchange={onFullNameChange}
            placeholder="Enter your full name"
          ></input>
        </div>
        <div className="billing-details">
          <label className="input-label">Email Id</label>
          <input
            className="input-field"
            type="text"
            value={email}
            onChange={onEmailChange}
            placeholder="Enter your email id"
          ></input>
        </div>
        <div className="billing-details">
          <label className="input-label address">Address</label>
          <input
            className="input-field"
            type="text"
            value={fulladdress}
            onChange={onFullAddressChange}
            placeholder="Full address"
          ></input>
        </div>
        <div className="billing-details">
          <label className="input-label">City</label>
          <input
            className="input-field"
            type="text"
            value={city}
            onChange={onCityChange}
            placeholder="City"
          ></input>
        </div>
        <div className="billing-details">
          <label className="input-label">State</label>
          <input
            className="input-field"
            type="text"
            value={state}
            onChange={onStateChange}
            placeholder="State"
          ></input>
        </div>
        <div className="billing-details">
          <label className="input-label">Pincode</label>
          <input
            className="input-field"
            type="text"
            value={pincode}
            onChange={onPincodeChange}
            placeholder="Pincode"
          ></input>
        </div>
      </form>

   
      <button className="checkout-btn" onClick={checkoutHandler}>
        Continue to Checkout
      </button>
     
    </div>
  );
}

export default Checkout;
