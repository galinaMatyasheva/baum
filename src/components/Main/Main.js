import React from "react";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";

import Form from "../../content/Form/Form";
import MapAdress from "../../content/Map/MapAdress";
import TeamInfo from "../../content/TeamInfo/TeamInfo";
import logo from "../../assets/logo.svg";
import "./Main.scss";
import BaumInformCreate from "../../content/BaumInformCreate/BaumInformCreate";

const Main = () => {
  return (
    <section className="main-container">
      <div className="main-container-info">
        <div className="main-feedback-content feedback-info">
          <div>
            <div className="content-img">
              <img src={logo} alt="logo" />
            </div>
            <p>Надёжное хранение данных</p>
            <button>Обратная связь</button>
          </div>
        </div>
        <div className="main-feedback-img feedback-info"></div>
      </div>
      <BaumInformCreate />

      <div className="shd-container-info">
        <div className="main-shd-content shd-info">
          <div className="shd-content">
            <h2>СХД</h2>
            <p className="info-text">
              СХД BAUM представляет собой высокопроизводительные, защищенные
              системы хранения данных большой ёмкости, обеспечивающие высокий
              уровень производительности, гибкости, масштабируемости,
              отказоустойчивости и преимуществ решения в целом для поддержки
              самых требовательных средств хранения данных.
            </p>
            <div className="shd-links">
              <div className="main-container-link shd-link">
                <a href="">BAUM UDS (scale up)</a>
                <ArrowRightAltIcon />
              </div>
              <div className="main-container-link shd-link">
                <a href="">BAUM SWARM (scale out)</a>
                <ArrowRightAltIcon />
              </div>
            </div>
          </div>
        </div>
        <div className="main-shd-img shd-info"></div>
      </div>

      <div className="store-info-about">
        <div className="store-info info-about-left">
          <h3>Больше вариантов хранения, больше вариантов оплаты</h3>
          <p className="info-text">
            Выберите AUM SWARM и размещайте данные именно там.ю где они вам
            нужны: в собственном ЦОД, в обычном или гиблидном облаке. Теперь
            доступно по подписке с оплатой по мере использования ресурсов.
          </p>
          <div className="store-info-link">
            <a href="">Узнать подробнее</a>
            <ArrowRightAltIcon />
          </div>
        </div>
        <div className="store-info-right"></div>
      </div>

      <div className="ai-container-info">
        <div className="main-ai-img ai-info"></div>
        <div className="main-ai-content ai-info">
          <div className="ai-content">
            <h2>Платформа прикладного ИИ</h2>
            <p className="info-text">
              Мы делаем программно-технический комплекс прикладного интеллекта
              BAUM AI, помогающий заказчикам из госсектора и среднего и крупного
              традиционного бизнеса быстро получать эффект от внедрения
              продвинутой аналитики на базе ИИ, используя сочетание
              оптимизированной аппаратной платформы с ориентированным на
              предметного пользователя, а также уникального софта собственной
              разработки, который позволяет создавать, обучать или использовать
              предобученные модели искусственного интеллекта без необходимости
              прямого кодирования по принципу drag-and-drop.
            </p>
            <div className="main-container-link ai-link">
              <a href="">Читать</a>
              <ArrowRightAltIcon />
            </div>
          </div>
        </div>
      </div>

      <div className="community-container-info">
        <div className="main-community-content community-info">
          <div className="community-content">
            <h2>Community</h2>
            <p className="info-text">
              Наша IT - команда строит модели, выбирает самые современные
              технологии, пишет код, оптимизирует его для различного железа,
              отлаживает, тестирует у заказчиков, вносит коррективы. Мы будем
              рады обсудить ваши пожелания и идеи.
            </p>
            <div className="community-links">
              <div className="main-container-link community-link">
                <a href="">Читать</a>
                <ArrowRightAltIcon />
              </div>
              <div className="main-container-link community-link">
                <a href="">Анкета</a>
                <ArrowRightAltIcon />
              </div>
            </div>
          </div>
        </div>
        <div className="main-community-img community-info"></div>
      </div>

      <TeamInfo />
      <MapAdress />
      <Form />
    </section>
  );
};

export default Main;
