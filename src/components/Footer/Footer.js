import React from "react";

import "./Footer.scss";
import logo from "../../assets/logo.svg";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-top">
        <div className="footer-top-links">
          <ul>
            <li>
              <a href="">О компании</a>
            </li>
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
              <a href="">Контакты</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="">Community</a>
            </li>
            <li>
              <a href="">Обучение</a>
            </li>
            <li>
              <a href="">AI</a>
            </li>
            <li>
              <a href="">BAUM SWARM (scale out)</a>
            </li>
            <li>
              <a href="">BAUM UDS (scale up)</a>
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

      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p>
            <a href="">Сроки и условия</a>
          </p>
          <p>
            <a href="">
              Политика конфиденциальности и использования файлов Cookie
            </a>
          </p>
          <p>
            <a href="">Обратная связь с сайтом</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
