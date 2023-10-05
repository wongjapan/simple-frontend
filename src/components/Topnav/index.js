import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
// import { ConnectButtonModal } from "./ConnectButtonModal";
import { ConnectKitButton } from 'connectkit';

const Topnav = () => {
  return (
    <header className="bg-dark text-white">
      <Navbar expand="lg">
        <div className="container-xxl">
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-between">
            <Nav>
              <Link className="nav-link text-white" to={"/"}>
                Home
              </Link>
            </Nav>
            <div className="d-flex justify-content-between">

              <ConnectKitButton />
            </div>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </header>
  );
};

export default Topnav;
