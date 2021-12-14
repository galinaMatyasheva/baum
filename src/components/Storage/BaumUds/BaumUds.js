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

import "./BaumUds.scss";
import BaumInformCreate from "../../../content/BaumInformCreate/BaumInformCreate";
import baumCard1 from "../../../assets/baum-uds/baum-card1.png";
import baumCard2 from "../../../assets/baum-uds/baum-card2.png";
import baumCard3 from "../../../assets/baum-uds/baum-card3.png";
import ApplicationForm from "../../../content/ApplicationForm/ApplicationForm";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";

const BaumUds = () => {
  let navigate = useNavigate();

  const scrollToTop = () => {
    setTimeout(() => {
      const aboutPageNode = document.getElementById("app");
      aboutPageNode.scrollIntoView({ behavior: "smooth" });
    }, 0);
  };

  const handleClickFunctional = () => {
    navigate("/baum-uds/functional");
    scrollToTop();
  };

  const handleClickSupport = () => {
    navigate("/baum-uds/support");
    scrollToTop();
  };

  const handleClickDocumentation = () => {
    navigate("/baum-uds/documentation");
    scrollToTop();
  };

  const handleClickModel = () => {
    navigate("/baum-uds/model");
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
    <section className="baum-uds-container">
      <Header />
      <div className="baum-uds-container-info">
        <div className="baum-uds-info">
          <div>
            <h1 className="title title-dark">BAUM UDS</h1>
            <div className="baum-uds-content">
              <p className="info-text">
                BAUM UDS предоставляет качественный продукт для управления
                данными, с применением современных флэш-технологий, как на
                файловом, так и на блочном уровне для самых требовательных
                приложений таких как:
              </p>
              <ul>
                <li>Базы данных;</li>
                <li>Виртуальных сред;</li>
                <li>Резервного копирования.</li>
              </ul>
              <p className="info-text">
                При этом данные распределяются по всей системе на виртуальных
                уровнях, что позволяет получить лучшую гибкость и надежность. За
                счет функционала динамического управления пространством
                хранения, возможно увеличивать объемы виртуальных уровней без
                остановки работы подключенных к ним систем. Процесс технического
                обслуживания (обновление микрокода) систем хранения данных также
                не повлечет за собой простоя в работе сервисов компании.
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
        <div className="baum-uds-img baum-uds-info"></div>
      </div>

      <div className="baum-uds-container-info">
        <div className="baum-uds-pages-img baum-uds-info"></div>
        <div className="baum-uds-pages-info">
          <div className="baum-uds-pages-content">
            <div className="baum-uds-pages-links">
              <div className="baum-uds-pages-link">
                <Button
                  className="btn btn-background-none"
                  endIcon={<ArrowRightAltIcon />}
                  onClick={handleClickFunctional}
                >
                  Функционал
                </Button>
              </div>
              <div className="baum-uds-pages-link">
                <Button
                  className="btn btn-background-none"
                  endIcon={<ArrowRightAltIcon />}
                  onClick={handleClickModel}
                >
                  Модели
                </Button>
              </div>
            </div>
            <div className="baum-uds-pages-links">
              <div className="baum-uds-pages-link">
                <Button
                  className="btn btn-background-none"
                  onClick={handleClickDocumentation}
                  endIcon={<ArrowRightAltIcon />}
                >
                  Документация
                </Button>
              </div>
              <div className="baum-uds-pages-link">
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

      <div className="baum-uds-container-cards">
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

export default BaumUds;
