import React from "react";
import style from "./Header.module.css";
import { Navbar } from "react-bootstrap";

function Header() {
  return (
    <Navbar className={style.header} expand="md" bg="light" variant="light">
      <Navbar.Brand href="#home">
        <img
          src="/logo.png"
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt="Logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <ul className={`navbar-nav mr-auto ${style.navItems}`}>
          <li className="nav-item">
            <a className="nav-link" href="#about">
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#skills">
              Skills
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#work">
              Work
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
