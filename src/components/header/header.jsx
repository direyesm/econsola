import React from "react";
import { Link } from "react-router-dom";

//ReactComponent lo puedo llamar
import { ReactComponent as Logo } from "../../assets/dj.svg";

import "./header.style.scss";

const Header = () => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="Logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/shop">
        CONTACT
      </Link>
      <Link className="option" to="/signin">
        SIGN IN
      </Link>
    </div>
  </div>
);

export default Header;
