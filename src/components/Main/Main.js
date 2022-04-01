import React from "react";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import { Button } from "@material-ui/core";
import { useNavigate } from "react-router-dom";

import Form from "../../content/Form/Form";
import MapAdress from "../../content/Map/MapAdress";
import TeamInfo from "../../content/TeamInfo/TeamInfo";
import logo2 from "../../assets/logo2.png";
import line from "../../assets/line.png";
import lineGray from "../../assets/main/lineGray.png";
import "./Main.scss";
import BaumInformCreate from "../../content/BaumInformCreate/BaumInformCreate";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Main = () => {
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

  const handleClickPlatform = () => {
    navigate("/ai/platform");
    scrollToTop();
  };

  const handleClickCommunity = () => {
    navigate("/community");
    scrollToTop();
  };

  const handleClickCases = () => {
    navigate("/ai/platform/functional");
    scrollToTop();
  };

  return (
    <>
      <section className="main-container">
        <Header />
        <div className="main-container-info">
          <div className="main-feedback-content feedback-info">
            <div>
              <div className="data">
                <img src={line} alt="line" />
                <p>Хранение и обработка данных</p>
              </div>
              <h1 className="logo" data-text="BAUM AI">
                BAUM AI
              </h1>
              <div className="content-img">
                <img src={logo2} alt="logo" />
              </div>
            </div>
          </div>
          <div className="main-feedback-img feedback-info">
            <div className="main-feebback-bkg"></div>
          </div>
        </div>
        <BaumInformCreate />

        <div className="shd-container-info">
          <div className="main-shd-content shd-info">
            <div className="shd-content">
              <h2>СХД</h2>
              <p className="info-text">
                СХД BAUM представляет собой высокопроизводительные, защищенные
                системы хранения данных большой ёмкости, обеспечивающие высокий
                уровень производительности, гибкости, масштабируемости и
                отказоустойчивости.
              </p>
              <div className="shd-links">
                <Button
                  className="btn btn-dark"
                  endIcon={<ArrowRightAltIcon />}
                  onClick={handleClickBaumUds}
                >
                  BAUM UDS
                </Button>

                <Button
                  className="btn btn-dark"
                  endIcon={<ArrowRightAltIcon />}
                  onClick={handleClickBaumSwarm}
                >
                  BAUM SWARM
                </Button>
              </div>
            </div>
          </div>
          <div className="main-shd-img shd-info"></div>
        </div>

        <div className="store-info-about">
          <div className="store-info-img">
            <div className="store-info-img-bg"></div>
          </div>
          <div className="store-info info-about-right">
            <div className="store-info-text">
              <div className="data-line">
                <img src={lineGray} alt="line" />
                <h3>Разработкой СХД занимаемся с 2010 года</h3>
              </div>
              <p className="info-text">
                В 2014 году у нас был первый готовый продукт и пошла
                коммерциализация. В 2017 году мы приняли решение разрабатывать
                платформу прикладного ИИ для комплексной аналитики текстовых,
                числовых, звуковых и видео данных пользователя.
              </p>
              <div className="info-text-btn">
                <Button
                  onClick={handleClickCases}
                  className="btn btn-outlined-light"
                  endIcon={<ArrowRightAltIcon />}
                >
                  Узнать подробнее
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="ai-container-info">
          <div className="main-ai-content ai-info">
            <div className="ai-content">
              <h3>Платформа прикладного ИИ</h3>
              <p className="info-text">
                Мы делаем программно-технический комплекс прикладного интеллекта
                BAUM AI, помогающий заказчикам из госсектора и среднего и
                крупного традиционного бизнеса быстро получать эффект от
                внедрения продвинутой аналитики на базе ИИ
              </p>
              <div className="ai-content-btn">
                <Button
                  className="btn btn-outlined-light"
                  endIcon={<ArrowRightAltIcon />}
                  onClick={handleClickPlatform}
                >
                  Читать
                </Button>
              </div>
            </div>
          </div>
          <div className="main-ai-img ai-info"></div>
        </div>

        <div className="main-community-container-info">
          <div className="main-community-img main-community-info"></div>
          <div className="main-community-content main-community-info">
            <div className="main-community-content-info">
              <div className="data-line">
                <img src={lineGray} alt="line" />
                <h3>Community</h3>
              </div>

              <p className="info-text">
                Мы формируем сообщество IT-профессионалов по AI и СХД.
                Разрабатываем учебные курсы, обучаем, создаем продукты и
                отстаиваем свои идеи на профессиональных конференциях.
              </p>
              <div className="community-links">
                <Button
                  onClick={handleClickCommunity}
                  className="btn btn-outlined-light"
                  endIcon={<ArrowRightAltIcon />}
                >
                  Читать
                </Button>
                <Button
                  className="btn btn-outlined-light"
                  href="http://npobaum1.tilda.ws/anketa1"
                  endIcon={<ArrowRightAltIcon />}
                >
                  Анкета
                </Button>
              </div>
            </div>
          </div>
        </div>

        <TeamInfo />
        <MapAdress />
        <Form />
      </section>
      <Footer />
    </>
  );
};

export default Main;
