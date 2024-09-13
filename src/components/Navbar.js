import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "./Navbar.css";

function Navb() {
  return (
    <Navbar expand="lg" className="custom-navbar">
      <Container>
        <Navbar.Brand
          style={{ color: "white" }}
          className="custom-navbar-brand"
        >
          Automate-Databricks
        </Navbar.Brand>
        {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
        <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navb;
