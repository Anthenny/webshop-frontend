import React from "react";
import { Link } from "react-router-dom";

import "./footer.scss";

const Footer = () => {
  return (
    <footer>
      <div class="icons">
        <Link to="https://www.facebook.com/annasaccessoires" target="_blank">
          <i class="fab fa-facebook"></i>
        </Link>
        <Link to="https://nl.pinterest.com/annapegels/" target="_blank">
          <i class="fab fa-pinterest"></i>
        </Link>
        <Link to="https://www.instagram.com/annasaccessoires/" target="_blank">
          <i class="fab fa-instagram"></i>
        </Link>
      </div>
      <div class="footer-tekst">
        <Link to="/retourneren">Retourneren</Link>
        <Link to="/inspiratie">Inspiratie</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </footer>
  );
};

export default Footer;
