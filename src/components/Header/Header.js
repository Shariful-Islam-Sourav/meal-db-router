import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink as AppLink } from "react-router-dom";

const Header = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <AppLink className="text-decoration-none fw-bolder" to="/home">
          <Navbar.Brand className="text-danger">Meals Mania</Navbar.Brand>
        </AppLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <AppLink
              className="text-decoration-none me-3 text-dark"
              to="/home"
              activeStyle={{
                fontWeight: "bold",
              }}
            >
              Home
            </AppLink>
            <AppLink
              className="text-decoration-none text-dark"
              to="/meals"
              activeStyle={{
                fontWeight: "bold",
                color: "orange",
              }}
            >
              Meals
            </AppLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
