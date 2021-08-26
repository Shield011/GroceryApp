import React, { Component } from "react";
import { Link } from "react-router-dom";
import fruits from "../assests/fruits.jpg";
import vegetables from "../assests/vegetables.jpg";
import snacks from "../assests/snacks.jpg";
import chocolates from "../assests/chocolates.jpg";
import flour from "../assests/flour.jpg";
import household from "../assests/household.jpg";
import beverages from "../assests/beverages.jpg";
import bathroomEssentials from "../assests/bathroomEssentials.jpg";
import all from "../assests/all.png";
import { FaShoppingCart } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { IoLogOut } from "react-icons/io5";
import { ProductConsumer } from "../context/Context";
import Dropdown from "react-bootstrap/Dropdown";
import "bootstrap/dist/css/bootstrap.css";
import "./navbar.css";

export default class Navbar extends Component {
  render() {
    const logoutHandler = () => {
      alert("You will be logged out");
      this.props.props.history.push("/");
    };

    return (
      <>
        <nav className="navbar navbar-expand-sm navbar-dark px-sm-5  navigation">
          <span
            className="navbar-brand"
            onClick={() => {
              this.props.props.history.push("/dashboard");
            }}
          >
            Grocery Shop
          </span>

          <div className="ml-auto">
            <button
              className="my-cart"
              onClick={() => {
                this.props.props.history.push("/cart");
              }}
            >
              <FaShoppingCart className="icons" size="1.2em" />
              My Cart
            </button>
          </div>

          <div className="dropdown">
            <Dropdown>
              <Dropdown.Toggle className="account-dropdown">
                <FaUserAlt className="icons" size="1.2em" />
                User
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item className="dropdown-item" href="/profile">
                  Account
                </Dropdown.Item>
                <Dropdown.Item className="dropdown-item" href="/">
                  Login
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>

          <button className="logout-btn" onClick={logoutHandler}>
            {" "}
            <IoLogOut className="icons" size="1.5em"  />
            Logout{" "}
          </button>
        </nav>
        <div className="row-wise">
          <Link to="/productlist" className="link-to">
            <div className="row-wise-display">
              <img className="row-img" src={all} alt="all"></img>
              <br />
              <span className="row-img-description">All</span>
            </div>
          </Link>
          <ProductConsumer>
            {(value) => (
              <div
                className="row-wise-display"
                onClick={() => {
                  console.log(this.props);
                  this.props.props.history.push("/vegetables");
                  value.filterByCategory("vegetables");
                }}
              >
                <img
                  className="row-img"
                  src={vegetables}
                  alt="vegetables"
                ></img>
                <br />
                <span className="row-img-description">Vegetables</span>
              </div>
            )}
          </ProductConsumer>

          <ProductConsumer>
            {(value) => (
              <div
                className="row-wise-display"
                onClick={() => {
                  this.props.props.history.push("/fruits");

                  value.filterByCategory("fruits");
                }}
              >
                <img className="row-img" src={fruits} alt="fruits"></img>
                <br />
                <span className="row-img-description">Fruits</span>
              </div>
            )}
          </ProductConsumer>

          <ProductConsumer>
            {(value) => (
              <div
                className="row-wise-display"
                onClick={() => {
                  this.props.props.history.push("/cooking");
                  value.filterByCategory("cookingNeeds");
                }}
              >
                <img
                  className="row-img"
                  src={flour}
                  alt="cooking Essentials"
                ></img>
                <br />
                <span className="row-img-description">Cooking Essentials</span>
              </div>
            )}
          </ProductConsumer>
          <ProductConsumer>
            {(value) => (
              <div
                className="row-wise-display"
                onClick={() => {
                  this.props.props.history.push("/snacks");
                  value.filterByCategory("snacks");
                }}
              >
                <img className="row-img" src={snacks} alt="snacks"></img>
                <br />
                <span className="row-img-description">Snacks</span>
              </div>
            )}
          </ProductConsumer>
          <ProductConsumer>
            {(value) => (
              <div
                className="row-wise-display"
                onClick={() => {
                  this.props.props.history.push("/household");
                  value.filterByCategory("dailyNeeds");
                }}
              >
                <img
                  className="row-img"
                  src={household}
                  alt="household items"
                ></img>
                <br />
                <span className="row-img-description">Household Items</span>
              </div>
            )}
          </ProductConsumer>
          <ProductConsumer>
            {(value) => (
              <div
                className="row-wise-display"
                onClick={() => {
                  this.props.props.history.push("/bathroom");
                  value.filterByCategory("bathroomNeeds");
                }}
              >
                <img
                  className="row-img"
                  src={bathroomEssentials}
                  alt="bathroom essentials"
                ></img>
                <br />
                <span className="row-img-description">Bathroom Essentials</span>
              </div>
            )}
          </ProductConsumer>
          <ProductConsumer>
            {(value) => (
              <div
                className="row-wise-display"
                onClick={() => {
                  this.props.props.history.push("/chocolates");
                  value.filterByCategory("chocolates");
                }}
              >
                <img
                  className="row-img"
                  src={chocolates}
                  alt="chocolates"
                ></img>
                <br />
                <span className="row-img-description">Chocolates</span>
              </div>
            )}
          </ProductConsumer>
          <ProductConsumer>
            {(value) => (
              <div
                className="row-wise-display"
                onClick={() => {
                  this.props.props.history.push("/beverages");
                  value.filterByCategory("beverages");
                }}
              >
                <img className="row-img" src={beverages} alt="beverages"></img>
                <br />
                <span className="row-img-description">Beverages</span>
              </div>
            )}
          </ProductConsumer>
        </div>
      </>
    );
  }
}
