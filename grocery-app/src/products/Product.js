import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../context/Context";
import PropTypes from "prop-types";
import "./product.css";

export default class Product extends Component {
  render() {
    
    const { id, name, price, image } = this.props.product;
    const userEmail = JSON.parse(localStorage.getItem("email"));
    const userPass = JSON.parse(localStorage.getItem("password"));

    // const disableAddToCart = () => {
    //   if (userEmail === 0 && userPass === 0) {
    //     alert("You need to login first");
    //     this.props.history.push("/");
    //   } else {
    //     value.addToCart(id)
    //   }
    // };

    return (
      <div className="row-display">
        <div className="row-item">
          <ProductConsumer>
            {(value) => (
              <div className="row-container">
                <img src={image} alt="product" className="small" />
                <h3 className="product-name">{name}</h3>
                <div className="product-price">Rs. {price}</div>
                <button
                  className="cart-btn" 
                  onClick={() => {
                    if (userEmail.length === 0 && userPass.length === 0) {
                      alert("You need to login first");
                      <Link to ="/"></Link>
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
