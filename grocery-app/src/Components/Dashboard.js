import React from "react";
import {withRouter} from 'react-router-dom';
import { Navbar, Nav, Form, Button } from 'react-bootstrap';

function Dashboard(props) {
  return (
    <div>
      <header>
        <p> Welcome</p>
        <p>Username</p>
        <p>Cart</p>
        <p> My Account</p>
      </header>
      <Navbar bg="primary" variant="dark">
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
        </Navbar>
    
    </div>
  );
}

export default Dashboard;
