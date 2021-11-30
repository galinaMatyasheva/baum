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

  return (
    <section className="baum-uds-container">
      <div className="baum-uds-container-info">
        <div className="baum-uds-info">
          <div>
            <h1 className="title title-dark">BAUM UDS (scale up)</h1>
            <div className="baum-uds-content">
              <p className="info-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <Button className="btn-dark" variant="contained">
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
    </section>
  );
};

export default BaumUds;
