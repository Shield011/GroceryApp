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
         
        </Switch>
      </div>
    );
  }
}
