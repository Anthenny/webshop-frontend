import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";

import "./navbar.scss";

const Navbar = () => {
  return (
    <header>
      <nav className="navbar__laptop">
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
        <div className="dropdown">
          Categorieën <i className="fas fa-caret-down"></i>
          <div className="dropdown__menu">
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
      <div className="navbar__gebruiker-info">
        <NavLink to="/login" className="gebruiker">
          <i className="fas fa-user"></i>
        </NavLink>

        <NavLink to="/winkelmand">
          <i className="fas fa-shopping-cart"></i>
        </NavLink>
      </div>
    </header>
  );
};

export default Navbar;
