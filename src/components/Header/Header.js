import React from "react";
import { IconButton, TextField, Select, MenuItem } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";

import "./Header.scss";
import logo from "../../assets/logo.svg";

const Header = () => {
  return (
    <header className="header-container">
      <nav className="navbar">
        <div className="img">
          <img src={logo} alt="logo" />
        </div>

        <div className="navbar-content">
          <ul className="navbar-menu-top">
            <li>
              <a href="">О нас</a>
            </li>
            <li>
              <a href="">Наша команда</a>
            </li>
            <li>
              <a href="">Новости</a>
            </li>
            <li>
              <a href="">Команда</a>
            </li>
          </ul>
          <ul className="navbar-menu-bottom">
            <form className="navbar-form-search">
              <TextField placeholder="Что вы ищете?" variant="outlined" />
              <IconButton type="submit" aria-label="search">
                <SearchIcon fontSize="small" />
              </IconButton>
            </form>
            <li className="submenu">
              <a href="">Storage</a>
              <KeyboardArrowDownIcon />
            </li>
            <li className="submenu">
              <a href="">AI</a>
              <KeyboardArrowDownIcon />
            </li>
            <li className="submenu">
              <a href="">Community</a>
              <KeyboardArrowDownIcon />
            </li>
            <li>
              <a href="">Обучение</a>
            </li>
            <li className="submenu">
              <a href="">О компании</a>
              <KeyboardArrowDownIcon />
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
