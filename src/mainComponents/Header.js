import React, { useState } from "react";
import style from "./Header.module.css";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={style.all}>
      <div className={style.header}>
        <a href="#about">
          {" "}
          <div className={style.logo}>
            <img
              src="/logo.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="Logo"
            />
          </div>
        </a>

        <div className={style.navItems}>
          <ul>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#work">Work</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
        {
          <div className={style.hamburger} onClick={toggleMenu}>
            <div
              className={`${style.bar} ${isMenuOpen ? style.open : ""}`}
            ></div>
            <div
              className={`${style.bar} ${isMenuOpen ? style.open : ""}`}
            ></div>
            <div
              className={`${style.bar} ${isMenuOpen ? style.open : ""}`}
            ></div>
          </div>
        }
      </div>
      {window.innerWidth <= 500 && isMenuOpen && (
        <div className={style.mobileMenu}>
          <ul>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#work">Work</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Header;
