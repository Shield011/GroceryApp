import React, { Component } from "react";
import Product from "./Product";
import { ProductConsumer } from "../context/Context";
import Navbar from "../componets/Navbar";
import "./product.css";


export default class ProductList extends Component {
  render() {
    return (
      
      <React.Fragment>
        <Navbar />
        <div className="all-products">
          <ProductConsumer>
            {(value) => {
              return value.products.map((product) => {
                return <Product key={product.id} product={product} />;
              });
            }}
          </ProductConsumer>
        </div>
      </React.Fragment>
    );
  }
}
