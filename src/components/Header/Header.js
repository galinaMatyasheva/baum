import React, { useState, useRef } from "react";
import {
  IconButton,
  TextField,
  Menu,
  MenuItem,
  Button,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import { Link } from "react-router-dom";

import "./Header.scss";
import logo from "../../assets/logo.svg";

const Header = () => {
  const [openLinkStorage, setOpenLinkStorage] = useState(null);
  const [openLinkAI, setOpenLinkAI] = useState(null);
  const [openLinkCommunity, setOpenLinkCommunity] = useState(null);
  const [openLinkCompany, setOpenLinkCompany] = useState(null);

  const handleClickOpenLinkStorage = (e) => {
    setOpenLinkStorage(e.currentTarget);
  };

  const handleClickOpenLinkAI = (e) => {
    setOpenLinkAI(e.currentTarget);
  };

  const handleClickOpenLinkCommunity = (e) => {
    setOpenLinkCommunity(e.currentTarget);
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

  const handleCloseLinkCommunity = () => {
    setOpenLinkCommunity(null);
  };

  const handleCloseLinkCompany = () => {
    setOpenLinkCompany(null);
  };

  const anchorStorageRef = useRef(null);
  const anchorAIRef = useRef(null);
  const anchorCommunityRef = useRef(null);
  const anchorCompanyRef = useRef(null);

  return (
    <header className="header-container">
      <nav className="navbar">
        <div className="img">
          <Link to="/">
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
                  endIcon={!openLinkStorage ? <KeyboardArrowDownIcon /> : <KeyboardArrowDownIcon style={{ transform:'rotate(180deg)'}}/>}
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
                  endIcon={!openLinkAI ? <KeyboardArrowDownIcon /> : <KeyboardArrowDownIcon style={{ transform:'rotate(180deg)'}}/>}
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
                    Платформа
                  </MenuItem>
                  <MenuItem onClick={handleCloseLinkAI}>
                    Решения для баз знаний
                  </MenuItem>
                  <MenuItem onClick={handleCloseLinkAI}>
                    Решения для ТОИР
                  </MenuItem>
                </Menu>
              </div>
              <div className="submenu">
                <Button
                 className={!openLinkCommunity ? "button" : "button-active"}
                  ref={anchorCommunityRef}
                  aria-haspopup="true"
                  onClick={handleClickOpenLinkCommunity}
                  endIcon={!openLinkCommunity ? <KeyboardArrowDownIcon /> : <KeyboardArrowDownIcon style={{ transform:'rotate(180deg)'}}/>}
                >
                  Community
                </Button>
                <Menu
                  id="community"
                  openLink={openLinkCommunity}
                  keepMounted
                  open={openLinkCommunity}
                  onClose={handleCloseLinkCommunity}
                  anchorEl={anchorCommunityRef.current}
                  anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                  transformOrigin={{ vertical: "top", horizontal: "center" }}
                  getContentAnchorEl={null}
                >
                  <MenuItem onClick={handleCloseLinkCommunity}>
                    База знаний
                  </MenuItem>
                  <MenuItem onClick={handleCloseLinkCommunity}>
                    Сообщество СХД и ИИ
                  </MenuItem>
                  <MenuItem onClick={handleCloseLinkCommunity}>
                    Партнеры и дистрибьюторы
                  </MenuItem>
                </Menu>
              </div>
              <div className="submenu">
                <Button>Обучение</Button>
              </div>
              <div className="submenu">
                <Button
                  className={!openLinkCompany ? "button" : "button-active"}
                  ref={anchorCompanyRef}
                  aria-haspopup="true"
                  onClick={handleClickOpenLinkCompany}
                  endIcon={!openLinkCompany ? <KeyboardArrowDownIcon /> : <KeyboardArrowDownIcon style={{ transform:'rotate(180deg)'}}/>}
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
                  <MenuItem onClick={handleCloseLinkCompany}>О нас</MenuItem>
                  <MenuItem onClick={handleCloseLinkCompany}>Новости</MenuItem>
                  <MenuItem onClick={handleCloseLinkCompany}>Контакты</MenuItem>
                </Menu>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
