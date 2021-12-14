import React from "react";
import { Link } from "react-router-dom";

import "./Navbar.scss";

const NavbarEducation = () => {
  return (
    <nav className="navbar-container-education">
      <ul className="navbar-baum">
        <li>
          <Link to="/education/details/0">Уровень 1</Link>
        </li>
        <li>
          <Link to="/education/details/1">Уровень 2</Link>
        </li>
        <li>
          <Link to="/education/details/2">Уровень 3</Link>
        </li>
        <li>
          <Link to="/education/details/3">Уровень 4</Link>
        </li>
        <li>
          <Link to="/education/details/4">Машинное и глубокое обучение</Link>
        </li>
      </ul>
    </nav>
  );
};
export default NavbarEducation;
