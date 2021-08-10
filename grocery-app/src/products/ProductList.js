import React, { Component } from "react";
import Product from "./Product";
import { ProductConsumer } from "../context/Context";
import Navbar from "../components/Navbar";
import "./product.css";
import Title from "../components/Title";

export default class ProductList extends Component {
  render() {
    return (
      
      <React.Fragment>

        <Navbar />
        <div className =  "py-5">
        <Title name = "All" title = "products" />
        <div className = "container">
        <div className="row">
          <ProductConsumer>
            {(value) => {
              return value.products.map((product) => {
                return <Product key={product.id} product={product} />;
              });
            }}
          </ProductConsumer>
        </div>
        </div>
        </div>
      </React.Fragment>
    );
  }
}
