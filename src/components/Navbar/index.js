import React from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Button,
  FormControl,
  Form
} from "react-bootstrap";
import { Redirect, Link, BrowserRouter as Router } from "react-router-dom";

const NavBar = ({ role }) => {
  return (
    <React.Fragment>
      {role && role === "manager" ? (
        <React.Fragment>
          <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">Employee Management System</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Router>
                  <Link to="/createprofile">Add Developer</Link>
                  <Link to="/allusers">All Developer</Link>
                  <Link to="/approvedrops">Approve Drops</Link>
                </Router>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </React.Fragment>
      ) : role && role === "developer" ? (
        <React.Fragment>
          <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">Employee Management System</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Nav>
                <Button variant="outline-info">Logout</Button>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </React.Fragment>
      ) : null}
    </React.Fragment>
  );
};

export default NavBar;
