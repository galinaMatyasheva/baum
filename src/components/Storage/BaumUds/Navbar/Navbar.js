import React from "react";
import { Link } from "react-router-dom";

import "./Navbar.scss";

const Navbar = () => {

  return (
    <nav className="navbar-container">
      <ul className="navbar-baum">
            <li>
              <Link to="/baum-uds/functional">Функционал</Link>
            </li>
            <li>
              <Link to="/baum-uds/model">Модель</Link>
            </li>
            <li>
              <Link to="/baum-uds/documentation">Документация</Link>
            </li>
            <li>
              <Link to="/baum-uds/support">Поддержка</Link>
            </li>
          </ul>
    </nav>
  );
};
export default Navbar;
