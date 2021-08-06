import React, { Component } from "react";
import Title from "../componets/Title";
import EmptyCart from "./EmptyCart";
import { ProductConsumer } from "../context/Context";
import CartList from "./CartList";
import CartTotal from "./CartTotal";

export default class Cart extends Component {
  render() {
    return (
      <div>
        <ProductConsumer>
          {(value) => {
            const { cart } = value;
            if (cart.length > 0) {
              return (
                <React.Fragment>
                  <Title name="My" title="Cart" />;
                  <CartList value={value} />
                  <CartTotal value = {value} />
                </React.Fragment>
              );
            } else {
              return <EmptyCart />;
            }
          }}
        </ProductConsumer>
      </div>
    );
  }
}
