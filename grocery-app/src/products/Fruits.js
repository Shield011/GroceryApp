import React, { Component } from "react";
import Product from "./Product";
import { ProductConsumer } from "../context/Context";
import Navbar from "../components/Navbar";
import "./product.css";
import Title from "../components/Title";

export default class Vegetables extends Component {
  render() {
    return (
      
      <React.Fragment>
        <Navbar props = {this.props}/>
        <div className = "py-5">
        <Title name = "Fruits" title = "products" />
        <div className = "container">
        <div className="row">
          <ProductConsumer>
            {(value) => {
              return value.filteredProducts.map((product) => {
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