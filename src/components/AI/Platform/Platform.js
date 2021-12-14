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

import "./Platform.scss";

const Platform = () => {
  let navigate = useNavigate();

  const scrollToTop = () => {
    setTimeout(() => {
      const aboutPageNode = document.getElementById("app");
      aboutPageNode.scrollIntoView({ behavior: "smooth" });
    }, 0);
  };

  const handleClickFunctional = () => {
    navigate("/ai/platform/functional");
    scrollToTop();
  };

  const handleClickSupport = () => {
    navigate("/ai/platform/support");
    scrollToTop();
  };

  const handleClickDocumentation = () => {
    navigate("/ai/platform/documentation");
    scrollToTop();
  };

  const handleClickModel = () => {
    navigate("/ai/platform/model");
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
    <section className="platform-container">
      <Header />
      <div className="platform-container-info">
        <div className="platform-info">
          <div>
            <h1 className="title title-dark">Platform</h1>
            <div className="platform-content">
              <p className="info-text">
                Мы разработали удобный инструмент для профильного аналитика,
                который сможет при помощи визуального программирования решать
                свои аналитические задачи без прямого кодирования.
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
        <div className="platform-img platform-info"></div>
      </div>
      <div className="platform-container-info">
        <div className="platform-pages-img platform-info"></div>
        <div className="platform-pages-info">
          <div className="platform-pages-content">
            <div className="platform-pages-links">
              <div className="platform-pages-link">
                <Button
                  className="btn btn-background-none"
                  endIcon={<ArrowRightAltIcon />}
                  onClick={handleClickFunctional}
                >
                  Функционал
                </Button>
              </div>
              <div className="platform-pages-link">
                <Button
                  className="btn btn-background-none"
                  endIcon={<ArrowRightAltIcon />}
                  onClick={handleClickModel}
                >
                  Модели
                </Button>
              </div>
            </div>
            <div className="platform-pages-links">
              <div className="platform-pages-link">
                <Button
                  className="btn btn-background-none"
                  onClick={handleClickDocumentation}
                  endIcon={<ArrowRightAltIcon />}
                >
                  Документация
                </Button>
              </div>
              <div className="platform-pages-link">
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
      <div className="platform-container-cards">
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

export default Platform;
