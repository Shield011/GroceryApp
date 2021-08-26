import React, { Component } from "react";
import Title from "../components/Title";
import EmptyCart from "./EmptyCart";
import { ProductConsumer } from "../context/Context";
import CartList from "./CartList";
import CartTotal from "./CartTotal";

export default class Cart extends Component {
  render() {
    return (
      <div className = "cart-page">
        <div>
        <ProductConsumer>
          {(value) => {
            const { cart } = value;
            if (cart.length > 0) {
              return (
                <React.Fragment>
                  <Title name="My" title="Cart" />;
                  <CartList props = {this.props} value={value} />
                  <CartTotal props = {this.props} value = {value} />
                </React.Fragment>
              );
            } else {
              return <EmptyCart props = {this.props}/>;
            }
          }}
        </ProductConsumer>
      </div>
      </div>
    );
  }
}
