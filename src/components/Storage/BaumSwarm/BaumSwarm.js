import React from "react";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
} from "@material-ui/core";
import { useNavigate } from "react-router-dom";

import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import BaumInformCreate from "../../../content/BaumInformCreate/BaumInformCreate";
import baumCard1 from "../../../assets/baum-uds/baum-card1.png";
import baumCard2 from "../../../assets/baum-uds/baum-card2.png";
import baumCard3 from "../../../assets/baum-uds/baum-card3.png";
import ApplicationForm from "../../../content/ApplicationForm/ApplicationForm";
import "./BaumSwarm.scss";

const BaumSwarm = () => {
  let navigate = useNavigate();

  const scrollToTop = () => {
    setTimeout(() => {
      const aboutPageNode = document.getElementById("app");
      aboutPageNode.scrollIntoView({ behavior: "smooth" });
    }, 0);
  };

  const handleClickFunctional = () => {
    navigate("/baum-swarm/functional");
    scrollToTop();
  };

  const handleClickSupport = () => {
    navigate("/baum-swarm/support");
    scrollToTop();
  };

  const handleClickDocumentation = () => {
    navigate("/baum-swarm/documentation");
    scrollToTop();
  };

  const handleClickModel = () => {
    navigate("/baum-swarm/model");
    scrollToTop();
  };

  const handleClickDetails = (key) => {
    navigate("/news/details/" + key);
    scrollToTop();
  };

  const handleClickContactUs = () => {
    navigate("/app-form");
    scrollToTop();
  };
  return (
    <section className="baum-swarm-container">
      <Header />
      <div className="baum-swarm-container-info">
        <div className="baum-swarm-info">
          <div>
            <h1 className="title title-dark">BAUM SWARM</h1>
            <div className="baum-swarm-content">
              <p className="info-text">
                Распределенная система хранения данных (РСХД) предназначена для
                организации доступа к ресурсам блочного, объектного и файлового
                хранения по запросу пользователя. РСХД относится к классу
                горизонтально-масштабируемых систем (scale-out), характеризуемых
                наличием большого числа серверов, объединенных в кластер.
                Кластер РСХД, состоит из узлов двух типов:
                <ul>
                  <li>Узлы модулей управления;</li>
                  <li>Узлы модулей хранения</li>
                </ul>
              </p>
              <Button
                className="btn btn-dark"
                variant="contained"
                onClick={handleClickContactUs}
              >
                Оставить заявку
              </Button>
            </div>
          </div>
        </div>
        <div className="baum-swarm-img baum-swarm-info"></div>
      </div>
      <div className="baum-swarm-container-info">
        <div className="baum-swarm-pages-img baum-swarm-info"></div>
        <div className="baum-swarm-pages-info">
          <div className="baum-swarm-pages-content">
            <div className="baum-swarm-pages-links">
              <div className="baum-swarm-pages-link">
                <Button
                  className="btn btn-background-none"
                  endIcon={<ArrowRightAltIcon />}
                  onClick={handleClickFunctional}
                >
                  Функционал
                </Button>
              </div>
              <div className="baum-swarm-pages-link">
                <Button
                  className="btn btn-background-none"
                  endIcon={<ArrowRightAltIcon />}
                  onClick={handleClickModel}
                >
                  Модели
                </Button>
              </div>
            </div>
            <div className="baum-swarm-pages-links">
              <div className="baum-swarm-pages-link">
                <Button
                  className="btn btn-background-none"
                  onClick={handleClickDocumentation}
                  endIcon={<ArrowRightAltIcon />}
                >
                  Документация
                </Button>
              </div>
              <div className="baum-swarm-pages-link">
                <Button
                  className="btn btn-background-none"
                  endIcon={<ArrowRightAltIcon />}
                  onClick={handleClickSupport}
                >
                  Поддержка
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BaumInformCreate />
      <div className="baum-swarm-container-cards">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia component="img" height="300" image={baumCard1} alt="img" />
          <CardContent>
            <h3>BAUM на Эльбрусе</h3>
            <p>
              12 июня в День России нам удалось подняться на самую высокую
              вершину нашей страны - гору Эльбрус (5642 метра).
            </p>
          </CardContent>
          <CardActions>
            <Button
              onClick={() => {
                handleClickDetails("68");
              }}
              className="btn-background-none"
              size="large"
              endIcon={<ArrowRightAltIcon />}
            >
              Читать
            </Button>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia component="img" height="300" image={baumCard2} alt="img" />
          <CardContent>
            <h3>Система предиктивной аналитики для ТЭЦ</h3>
            <p>
              Наша команда разрабатывает систему предиктивной аналитики для
              предприятий ТЭЦ - определяющую фактическое состояние
            </p>
          </CardContent>
          <CardActions>
            <Button
              onClick={() => {
                handleClickDetails("73");
              }}
              className="btn-background-none"
              size="large"
              endIcon={<ArrowRightAltIcon />}
            >
              Читать
            </Button>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia component="img" height="300" image={baumCard3} alt="img" />
          <CardContent>
            <h3>BAUM на "Российской неделе Высоких технологий"</h3>
            <p>
              BAUM дставляет свои решения на "Российской Неделе Высоких
              Технологий" в ЦВК "Экспоцентр".
            </p>
          </CardContent>
          <CardActions>
            <Button
              onClick={() => {
                handleClickDetails("71");
              }}
              className="btn-background-none"
              size="large"
              endIcon={<ArrowRightAltIcon />}
            >
              Читать
            </Button>
          </CardActions>
        </Card>
      </div>

      <ApplicationForm />
      <Footer />
    </section>
  );
};

export default BaumSwarm;
