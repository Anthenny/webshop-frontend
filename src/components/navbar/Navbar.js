import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";

import "./navbar.scss";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <nav class="navbar__laptop">
        <FaBars className="hamburger" />
        <div className="nav__menu-mobiel">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/oorbellen">Oorbellen</NavLink>
          <NavLink to="/armbanden">Armbanden</NavLink>
          <NavLink to="/babyaccessoires">Baby accessoires</NavLink>
          <NavLink to="/tassen">Tassen</NavLink>
          <NavLink to="/waxmelts">Wax Melts</NavLink>
          <NavLink to="/profiel">Profiel</NavLink>
        </div>
        <NavLink className="home" to="/">
          Home
        </NavLink>
        <div class="dropdown">
          Categorieën <i class="fas fa-caret-down"></i>
          <div class="dropdown__menu">
            <ul>
              <li>
                <NavLink to="/oorbellen">Oorbellen</NavLink>
              </li>
              <li>
                <NavLink to="/armbanden">Armbanden</NavLink>
              </li>
              <li>
                <NavLink to="/babyaccessoires">Baby-accessoires</NavLink>
              </li>
              <li>
                <NavLink to="/tassen">Tassen</NavLink>
              </li>
              <li>
                <NavLink to="/waxmelts">Wax Melts</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <h2>Anna's accessoires</h2>
      <div class="navbar__gebruiker-info">
        <NavLink to="/login" className="gebruiker">
          <i class="fas fa-user"></i>
        </NavLink>

        <NavLink to="/winkelmand">
          <i class="fas fa-shopping-cart"></i>
        </NavLink>
      </div>
    </header>
  );
};

export default Navbar;
