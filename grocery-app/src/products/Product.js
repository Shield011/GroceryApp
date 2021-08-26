import React, { Component } from "react";
import { ProductConsumer } from "../context/Context";
import PropTypes from "prop-types";
import "./product.css";

export default class Product extends Component {
  render() {
    const { id, name, price, image } = this.props.product;
    const userEmail = JSON.parse(localStorage.getItem("email"));
    const userPass = JSON.parse(localStorage.getItem("password"));

    return (
      <div className = "back">
      <div className="col-9 mx-auto col-md-7 col-lg-4 my-4">
        <ProductConsumer>
          {(value) => (
            <div className="card">
              <img src={image} alt={name} className="card-img-top small" />
              <h3 className="product-name">{name}</h3>
              <div className="product-price">Rs. {price}</div>
              <button
                className="cart-btn"
                onClick={() => {
                  if (userEmail.length === 0 && userPass.length === 0) {
                    alert("You need to login first");
                    this.props.props.history.push("/");
                  } else {
                    value.addToCart(id);
                  }
                }}
              >
                Add to Cart
              </button>
            </div>
          )}
        </ProductConsumer>
      </div>
      </div>
    );
  }
}

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    image: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
};
