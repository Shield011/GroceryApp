import React from "react";

export default function CartTotal({ value, props }) {
  const { cartSubTotal, cartTax, shippingCharges, cartTotal, clearCart } = value;
  const { cart } = value;

  const checkoutHandler = () => {
    localStorage.setItem("cart", JSON.stringify(cart));
      props.history.push("/checkout")
    
  };

  return (
    <React.Fragment>
      <div className="container-fluid">
        <div className="cart-row">
          <div className="total-items">
              <button className="clear-cart-btn" onClick={() => 
                {
                  props.history.push("/dashboard")
                  clearCart()}}>
                Clear cart
              </button>
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
          <button className="cart-checkout-btn" onClick={checkoutHandler}>
            Checkout
          </button>
        
      </div>
    </React.Fragment>
  );
}
