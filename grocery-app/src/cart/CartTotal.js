import React from "react";
import { Link } from "react-router-dom";

export default function CartTotal({ value, props }) {
  const { cartSubTotal, cartTax, shippingCharges, cartTotal, clearCart } =
    value;
  const { cart } = value;

  const checkoutHandler = () => {
    localStorage.setItem("cart", JSON.stringify(cart));
    const userEmail = JSON.parse(localStorage.getItem("email"));
    const userPass = JSON.parse(localStorage.getItem("password"));
    if (userEmail.length === 0 && userPass.length === 0){
      alert("You need to login First");
      <Link to = "/" />
    }else {
      <Link to = "/checkout" />
    }
  };

  return (
    <React.Fragment>
      <div className="container-fluid">
        <div className="row">
          <div className="total-items">
            <Link to="/dashboard">
              <button className="clear-cart-btn" onClick={() => clearCart()}>
                Clear cart
              </button>
            </Link>
            <hr />
            <h5>
              <span className="subtotal">Subtotal : Rs. {cartSubTotal}</span>
            </h5>
            <h5>
              <span className="carttax">Tax : Rs. {cartTax}</span>
            </h5>
            <h5>
              <span className="shipping">
                Shipping Charges : Rs. {shippingCharges}
              </span>
            </h5>
            <hr></hr>
            <h5>
              <span className="carttotal">Cart Total : Rs. {cartTotal}</span>
            </h5>
            <hr />
          </div>
        </div>
          <Link to = "/checkout">
          <button className="cart-checkout-btn" onClick={checkoutHandler}>
            Checkout
          </button>
          </Link>
        
      </div>
    </React.Fragment>
  );
}
