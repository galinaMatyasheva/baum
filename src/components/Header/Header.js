import React, { useState, useRef } from "react";
import {
  IconButton,
  TextField,
  Menu,
  MenuItem,
  Button,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import { Link, useNavigate } from "react-router-dom";

import "./Header.scss";
import logo from "../../assets/logo.svg";

const Header = () => {
  const [openLinkStorage, setOpenLinkStorage] = useState(null);
  const [openLinkAI, setOpenLinkAI] = useState(null);
  const [openLinkCompany, setOpenLinkCompany] = useState(null);
  const [openPhoneMenu, setOpenPhoneMenu] = useState(false);

  const anchorStorageRef = useRef(null);
  const anchorAIRef = useRef(null);
  const anchorCompanyRef = useRef(null);

  let navigate = useNavigate();

  const handleClickOpenPhoneMenu = () => {
     console.log("handleClickOpenPhoneMenu");
     setOpenPhoneMenu(!openPhoneMenu);
   
  };

  const handleClickCommunity = () => {
    navigate("/community");
  };

  const handleClickEducation = () => {
    navigate("/education");
  };

  const handleClickOpenLinkStorage = (e) => {
    setOpenLinkStorage(e.currentTarget);
  };

  const handleClickOpenLinkAI = (e) => {
    setOpenLinkAI(e.currentTarget);
  };

  const handleClickOpenLinkCompany = (e) => {
    setOpenLinkCompany(e.currentTarget);
  };

  const handleCloseLinkStorage = () => {
    setOpenLinkStorage(null);
  };

  const handleCloseLinkAI = () => {
    setOpenLinkAI(null);
  };

  const handleCloseLinkCompany = () => {
    setOpenLinkCompany(null);
  };

  return (
    <header className="header-container">
      <nav className="navbar">
        <div className="img">
          <Link to="/main">
            <img src={logo} alt="logo" />
          </Link>
        </div>

        <div className="navbar-content">
          <ul className="navbar-menu-top">
            <li>
              <Link to="/about-us">О нас</Link>
            </li>
            <li>
              <Link to="/our-team">Наша команда</Link>
            </li>
            <li>
              <Link to="/news">Новости</Link>
            </li>
            <li>
              <Link to="/contact-us">Контакты</Link>
            </li>
          </ul>

          <div className="navbar-menu-bottom">
            <form className="navbar-form-search">
              <TextField placeholder="Что вы ищете?" variant="outlined" />
              <IconButton type="submit" aria-label="search">
                <SearchIcon fontSize="small" />
              </IconButton>
            </form>
            <div className="navbar-menu-bottom-links">
              <div className="submenu">
                <Button
                  className={!openLinkStorage ? "button" : "button-active"}
                  ref={anchorStorageRef}
                  aria-haspopup="true"
                  onClick={handleClickOpenLinkStorage}
                  endIcon={
                    !openLinkStorage ? (
                      <KeyboardArrowDownIcon />
                    ) : (
                      <KeyboardArrowDownIcon
                        style={{ transform: "rotate(180deg)" }}
                      />
                    )
                  }
                >
                  Storage
                </Button>
                <Menu
                  id="storage"
                  openLink={openLinkStorage}
                  keepMounted
                  open={openLinkStorage}
                  onClose={handleCloseLinkStorage}
                  anchorEl={anchorStorageRef.current}
                  anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                  transformOrigin={{ vertical: "top", horizontal: "center" }}
                  getContentAnchorEl={null}
                >
                  <MenuItem onClick={handleCloseLinkStorage}>
                    <Link to="/baum-uds">BAUM UDS (scale up)</Link>
                  </MenuItem>
                  <MenuItem onClick={handleCloseLinkStorage}>
                    <Link to="/baum-swarm">BAUM SWARM (scale out)</Link>
                  </MenuItem>
                </Menu>
              </div>

              <div className="submenu">
                <Button
                  className={!openLinkAI ? "button" : "button-active"}
                  ref={anchorAIRef}
                  aria-haspopup="true"
                  onClick={handleClickOpenLinkAI}
                  endIcon={
                    !openLinkAI ? (
                      <KeyboardArrowDownIcon />
                    ) : (
                      <KeyboardArrowDownIcon
                        style={{ transform: "rotate(180deg)" }}
                      />
                    )
                  }
                >
                  AI
                </Button>
                <Menu
                  id="ai"
                  openLink={openLinkAI}
                  keepMounted
                  open={openLinkAI}
                  onClose={handleCloseLinkAI}
                  anchorEl={anchorAIRef.current}
                  anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                  transformOrigin={{ vertical: "top", horizontal: "center" }}
                  getContentAnchorEl={null}
                >
                  <MenuItem onClick={handleCloseLinkAI}>
                    <Link to="/ai/platform">Платформа</Link>
                  </MenuItem>
                  <MenuItem onClick={handleCloseLinkAI}>
                    <Link to="/ai/solutionDB">Решения для баз знаний</Link>
                  </MenuItem>
                  <MenuItem onClick={handleCloseLinkAI}>
                    <Link to="/ai/solutionTOIR">Решения для ТОИР</Link>
                  </MenuItem>
                </Menu>
              </div>
              <div className="submenu">
                <Button className="btn-padding" onClick={handleClickCommunity}>
                  Community
                </Button>
              </div>
              <div className="submenu">
                <Button className="btn-padding" onClick={handleClickEducation}>
                  Обучение
                </Button>
              </div>
              <div className="submenu">
                <Button
                  className={!openLinkCompany ? "button" : "button-active"}
                  ref={anchorCompanyRef}
                  aria-haspopup="true"
                  onClick={handleClickOpenLinkCompany}
                  endIcon={
                    !openLinkCompany ? (
                      <KeyboardArrowDownIcon />
                    ) : (
                      <KeyboardArrowDownIcon
                        style={{ transform: "rotate(180deg)" }}
                      />
                    )
                  }
                >
                  О компании
                </Button>
                <Menu
                  id="company"
                  openLink={openLinkCompany}
                  keepMounted
                  open={openLinkCompany}
                  onClose={handleCloseLinkCompany}
                  anchorEl={anchorCompanyRef.current}
                  anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                  transformOrigin={{ vertical: "top", horizontal: "center" }}
                  getContentAnchorEl={null}
                >
                  <MenuItem onClick={handleCloseLinkCompany}>
                    <Link to="/about-us">О нас</Link>
                  </MenuItem>
                  <MenuItem onClick={handleCloseLinkCompany}>
                    <Link to="/news">Новости</Link>
                  </MenuItem>
                  <MenuItem onClick={handleCloseLinkCompany}>
                    <Link to="/contact-us">Контакты</Link>
                  </MenuItem>
                  <MenuItem onClick={handleCloseLinkCompany}>
                    <Link to="/vacancies">Вакансии</Link>
                  </MenuItem>
                </Menu>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <nav className="navbar-phone">
        <div className="navbar-phone-icons">
          <IconButton
            type="submit"
            aria-label="search"
            onClick={handleClickOpenPhoneMenu}
          >
            {openPhoneMenu ? (
              <CloseIcon className="icon-menu"  />
            ) : (
              <MenuIcon className="icon-menu" />
            )}
          </IconButton>
          <div className="img">
            <Link to="/main">
              <img src={logo} alt="logo" />
            </Link>
          </div>
        </div>
        { openPhoneMenu ?
        <div className="navbar-content-phone">
            <form className="navbar-form-search">
              <TextField placeholder="Что вы ищете?" variant="outlined" />
              <IconButton type="submit" aria-label="search">
                <SearchIcon fontSize="small" />
              </IconButton>
            </form>

            <div className="navbar-content-phone-links">
              <ul>
                <li>
                  <h4>Storage</h4>
                </li>
                <li>
                  <Link to="/baum-uds">BAUM UDS (scale up)</Link>
                </li>
                <li>
                  <Link to="/baum-swarm">BAUM SWARM (scale out)</Link>
                </li>
              </ul>
              <ul>
                <li>
                  <h4>AI</h4>
                </li>
                <li>
                  <Link to="/ai/platform">Платформа</Link>
                </li>

                <li>
                  <Link to="/ai/solutionDB">Решения для баз знаний</Link>
                </li>

                <li>
                  <Link to="/ai/solutionTOIR">Решения для ТОИР</Link>
                </li>
              </ul>
              <Link to="/community">
                <h4>Community</h4>
              </Link>
              <Link to="/education">
                <h4>Обучение</h4>
              </Link>
              <ul>
                <li>
                  <h4>О компании</h4>
                </li>
                <li>
                  <Link to="/about-us">О нас</Link>
                </li>
                <li>
                  <Link to="/news">Новости</Link>
                </li>
                <li>
                  <Link to="/contact-us">Контакты</Link>
                </li>
                <li>
                  <Link to="/vacancies">Вакансии</Link>
                </li>
              </ul>
            </div>
        </div>
        : ''
}
      </nav>
    </header>
  );
};

export default Header;
