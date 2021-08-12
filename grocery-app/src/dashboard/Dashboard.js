import React, { Component } from "react";
import { Link } from "react-router-dom";
import fastdelivery from "../assests/fastdelivery.jpg";
import freshfoodadd from "../assests/freshfoodadd.png";
import fruits from "../assests/fruits.jpg";
import vegetables from "../assests/vegetables.jpg";
import snacks from "../assests/snacks.jpg";
import chocolates from "../assests/chocolates.jpg";
import flour from "../assests/flour.jpg";
import Navbar from "../components/Navbar";
import "./dashboard.css";

export default class Dashboard extends Component {
  render() {
    return (
      <>
        <Navbar props = {this.props}/>
        <div className="ad-container">
          <img className="ad" src={fastdelivery} alt = "Fast delievry ad"></img>
          <img className="ad" src={freshfoodadd} alt = "Fresh Food ad"></img>
        </div>

        <div className="shop-by-category">
          <span className="shop-by-category-span">Recommended for you</span>
        </div>
        <div className="category" >
            <div className="category-card" onClick = {() => {
              this.props.history.push("/vegetables") }}>
              <img
                className="category-img"
                src={vegetables}
                alt="vegetables"
              ></img>
              <span className="img-description">Fresh Vegetables</span>
            </div>

            <div className="category-card" onClick = {() => {
              this.props.history.push("/fruits") }}>
              <img className="category-img" src={fruits} alt="fruits"></img>
              <span className="img-description"> Fresh Fruits</span>
            </div>

            <div className="category-card" onClick = {() => {
              this.props.history.push("/cooking") }}>
              <img
                className="category-img"
                src={flour}
                alt="cooking Essentials"
              ></img>
              <span className="img-description">Cooking Essentials</span>
            </div>

            <div className="category-card" onClick = {() => {
              this.props.history.push("/snacks") }}>
              <img className="category-img" src={snacks} alt="snacks"></img>
              <span className="img-description">Mixtures, Snacks</span>
            </div>

            <div className="category-card" onClick = {() => {
              this.props.history.push("/chocolates") }}>
              <img
                className="category-img"
                src={chocolates}
                alt="chocolates"
              ></img>
              <span className="img-description">Chocolates, candies</span>
            </div>
        </div>

        <br />
      </>
    );
  }
}
