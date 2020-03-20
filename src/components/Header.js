import React from "react";
import { Navbar } from "react-bootstrap";

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
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR3c7JlL_MACkLQhxl43Y1NAK5681THDR3DlzhGmDnJdRRjfTwA"
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
