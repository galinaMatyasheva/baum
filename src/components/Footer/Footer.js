import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@material-ui/core";

import "./Footer.scss";
import logo from "../../assets/logo.svg";

const Footer = () => {
  let navigate = useNavigate();

  const scrollToTop = () => {
    setTimeout(() => {
      const aboutPageNode = document.getElementById("app");
      aboutPageNode.scrollIntoView({ behavior: "smooth" });
    }, 0);
  };

  const handleClickBaumUds = () => {
    navigate("/baum-uds");
    scrollToTop();
  };

  const handleClickBaumSwarm = () => {
    navigate("/baum-swarm");
    scrollToTop();
  };

  const handleClickContactUs = () => {
    navigate("/contact-us");
    scrollToTop();
  };

  const handleClickCommunity = () => {
    navigate("/community");
    scrollToTop();
  };

  const handleClickAboutUs = () => {
    navigate("/about-us");
    scrollToTop();
  };

  const handleClickTeam = () => {
    navigate("/our-team");
    scrollToTop();
  };

  const handleClickNews = () => {
    navigate("/news");
    scrollToTop();
  };

  const handleClickEducation = () => {
    navigate("/education");
    scrollToTop();
  };

  const handleClickPlatform = () => {
    navigate("/ai/platform");
    scrollToTop();
  };

  return (
    <footer className="footer-container">
      <div className="footer-top">
        <div className="footer-top-links">
          <ul>
            <li>
              <Button onClick={handleClickAboutUs}>О компании</Button>
            </li>
            <li>
              <Button onClick={handleClickTeam}>Наша команда</Button>
            </li>
            <li>
              <Button onClick={handleClickNews}>Новости</Button>
            </li>
            <li>
              <Button onClick={handleClickContactUs}>Контакты</Button>
            </li>
          </ul>
          <ul>
            <li>
              <Button onClick={handleClickCommunity}>Community</Button>
            </li>
            <li>
              <Button onClick={handleClickEducation}>Обучение</Button>
            </li>
            <li>
              <Button className="footer-ai" onClick={handleClickPlatform}>
                AI
              </Button>
            </li>
            <li>
              <Button onClick={handleClickBaumSwarm}>
                BAUM SWARM
              </Button>
            </li>
            <li>
              <Button onClick={handleClickBaumUds}>
                BAUM UDS
              </Button>
            </li>
          </ul>
        </div>

        <div className="footer-top-contacts">
          <div className="footer-logo">
            <img src={logo} alt="logo"></img>
          </div>
          <div className="footer-contacts">
            <p>
              <span>Наш адрес: </span>Москва, ул.Бауманская,
              <br /> д.68/8, стр.1, помещение IV
            </p>
            <p>
              Телефон: <a href="tel:+74952491113">+7 495 249-11-13</a>
            </p>
            <p>
              E-mail:
              <a href="mailto:info@baum-inform.ru">info@baum-inform.ru</a>
            </p>
          </div>
          <p className="footer-copyright">
            © 2021 Baum-inform. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
