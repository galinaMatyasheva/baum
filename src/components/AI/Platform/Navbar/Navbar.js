import React from "react";
import { Link } from "react-router-dom";

import "./Navbar.scss";

const NavbarSwarm = () => {

  return (
    <nav className="navbar-container">
      <ul className="navbar-baum">
            <li>
              <Link to="/ai/platform/functional">Функционал</Link>
            </li>
            <li>
              <Link to="/ai/platform/model">Модель</Link>
            </li>
            <li>
              <Link to="/ai/platform/documentation">Документация</Link>
            </li>
            <li>
              <Link to="/ai/platform/support">Поддержка</Link>
            </li>
          </ul>
    </nav>
  );
};
export default NavbarSwarm;
