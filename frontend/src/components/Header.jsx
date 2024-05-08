import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import '../assets/styles/custom_css.css';
import logo from '../assets/image/swift.png'

const Header = () => {
  return (
    <header>
      <Navbar variant="dark" expand="lg" collapseOnSelect className="custom-navbar" >
        <Container>
          <Navbar.Brand href="/">
          <img src={logo} alt="" className="brand-logo" />

            SwiftCart</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/cart">
                <FaShoppingCart /> Cart
              </Nav.Link>
              <Nav.Link href="/login">
                <FaUser /> Sign In
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
