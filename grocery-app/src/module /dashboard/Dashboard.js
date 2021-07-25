import React from "react";
import {withRouter} from 'react-router-dom';
import { Navbar, Nav, Form, Button } from 'react-bootstrap';


function Dashboard({Vegetablesproducts, Fruitsproducts, Snacksproducts, Beveragesproducts}) {
  // const {Vegetablesproducts} = props;
  // const {Fruitsproducts} = props;
  // const {Snacksproducts} = props;
  // const {Beveragesproducts} = props;
  
  return (
    <div>
      <header>
        <p> Welcome</p>
        <p>Username</p>
        <p>Cart</p>
        <p> My Account</p>
      </header>
      <main className = "block col-2">
      <h2> Vegetables </h2>
      < div className = "row">
        {Vegetablesproducts.map((Vegetablesproducts) => (
          <Vegetables key = {Vegetablesproducts.id} Vegetablesproducts = {Vegetablesproducts}></Vegetables>

        ))}
      </div>
      <h2> Fruits </h2>
      <div className = "row">
        {Fruitsproducts.map((Fruitsproducts) => (
          <Fruits key = {Fruitsproducts.id} Fruitsproducts = {Fruitsproducts}></Fruits>

        ))}
      </div>
      <h2>Snacks</h2>
      <div className = "row">
        {Snacksproducts.map((Snacksproducts) => (
          <Snacks key = {Snacksproducts.id} Snacksproducts = {Snacksproducts}></Snacks>

        ))}
      </div>
      <h2>Beverages</h2>
      <div className = "row">
        {Beveragesproducts.map((Beveragesproducts) => (
          <Beverages key = {Beveragesproducts.id} Beveragesproducts = {Beveragesproducts}></Beverages>

        ))}
      </div>

      </main>
     
      {/* <Navbar bg="primary" variant="dark">
            <Navbar.Brand href="#home"></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/">Vegetables</Nav.Link>
                    <Nav.Link href="/Fruits">Fruits</Nav.Link>
                    <Nav.Link href="/Beverages">Beverages</Nav.Link>
                    <Nav.Link href="/Snacks">Snacks</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar> */}

    
    </div>
  );
}

export default Dashboard ;
