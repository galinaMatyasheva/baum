import React from "react";
import { Link } from "react-router-dom";

import "./Navbar.scss";

const NavbarSwarm = () => {

  return (
    <nav className="navbar-container">
      <ul className="navbar-baum">
            <li>
              <Link to="/baum-swarm/functional">Функционал</Link>
            </li>
            <li>
              <Link to="/baum-swarm/model">Модель</Link>
            </li>
            <li>
              <Link to="/baum-swarm/documentation">Документация</Link>
            </li>
            <li>
              <Link to="/baum-swarm/support">Поддержка</Link>
            </li>
          </ul>
    </nav>
  );
};
export default NavbarSwarm;
