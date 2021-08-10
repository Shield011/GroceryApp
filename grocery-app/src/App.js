import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductList from "./products/ProductList";
import Cart from "./cart/Cart";
import Checkout from "./checkout/Checkout";
import Endpage from "./checkout/Endpage";
import Dashboard from "./dashboard/Dashboard";
import Login from "./login/Login";
import Profile from "./user/Profile";
import Vegetables from "./products/Vegetables";
import Fruits from "./products/Fruits";
import Cooking from "./products/Cooking";
import HouseHold from "./products/HouseHold";
import Beverages from "./products/Beverages";
import Bathroom from "./products/Bathroom";
import Snacks from "./products/Snacks";
import Chocolates from "./products/Chocolates";



export default class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/productlist" component={ProductList} />
          <Route path="/cart" component={Cart} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/endpage" component={Endpage} />
          <Route path="/profile" component={Profile} />
          <Route path = "/vegetables" component = {Vegetables} />
          <Route path = "/fruits" component = {Fruits} />
          <Route path = "/snacks" component = {Snacks} />
          <Route path = "/chocolates" component = {Chocolates} />
          <Route path = "/beverages" component = {Beverages} />
          <Route path = "/household" component = {HouseHold} />
          <Route path = "/bathroom" component = {Bathroom} />
          <Route path = "/cooking" component = {Cooking} />
        </Switch>
      </div>
    );
  }
}
