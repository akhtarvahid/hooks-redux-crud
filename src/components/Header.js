import React from "react";
import { Navbar } from "react-bootstrap";
import LOGO from '../assets/Logo.png';

function Header() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar bg="dark">
          <Navbar.Brand></Navbar.Brand>
        </Navbar>
        <Navbar.Brand href="">
          <img
            alt=""
            src={LOGO}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />
          REACT CRUD
        </Navbar.Brand>
      </Navbar>
    </div>
  );
}

export default Header;
