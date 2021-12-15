import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button
} from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";

import "./Partners.scss";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import ApplicationForm from "../../../content/ApplicationForm/ApplicationForm";

const Partners = () => {
  let navigate = useNavigate();

  const scrollToTop = () => {
    setTimeout(() => {
      const aboutPageNode = document.getElementById("app");
      aboutPageNode.scrollIntoView({ behavior: "smooth" });
    }, 0);
  };

  const handleClickAboutUs = () => {
    navigate("/about-us");
    scrollToTop();
  };

  return (
    <div className="partners-container">
      <Header />
      <div className="partners-container-info">
        <h1 className="title-baum title-orange">Партнеры</h1>
        <div className="partners-img"></div>
      </div>

      <div className="accordion-container">
        <div className="accordion-info">
          <Accordion>
            <AccordionSummary expandIcon={<KeyboardArrowDownIcon />}>
              <h4>Партнеры</h4>
            </AccordionSummary>
            <AccordionDetails>
              <div className="accordin-details-container-img">
                <img src="/assets/partners/partners/elefus.png" alt="img" />
                <img
                  src="/assets/partners/partners/gazprompribor.png"
                  alt="img"
                />
                <img src="/assets/partners/partners/jet.png" alt="img" />
                <img src="/assets/partners/partners/krock.png" alt="img" />
                <img src="/assets/partners/partners/servionica.png" alt="img" />
              </div>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<KeyboardArrowDownIcon />}>
              <h4>Партнеры по RnD</h4>
            </AccordionSummary>
            <AccordionDetails>
              <div className="accordin-details-container-img">
                <img src="/assets/partners/partners-Rnd/mgtu.png" alt="img" />
                <img src="/assets/partners/partners-Rnd/msc.png" alt="img" />
              </div>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<KeyboardArrowDownIcon />}>
              <h4>Партнеры по программному обеспечению</h4>
            </AccordionSummary>
            <AccordionDetails>
              <div className="accordin-details-container-img">
                <img
                  src="/assets/partners/partners-soft/aconic.png"
                  alt="img"
                />
                <img
                  src="/assets/partners/partners-soft/acronis.png"
                  alt="img"
                />
                <img
                  src="/assets/partners/partners-soft/posgres.png"
                  alt="img"
                />
                <img src="/assets/partners/partners-soft/ros.png" alt="img" />
                <img src="/assets/partners/partners-soft/rubi.png" alt="img" />
              </div>
            </AccordionDetails>
          </Accordion>
        </div>
        <div className="accordion-info">
          <Accordion>
            <AccordionSummary expandIcon={<KeyboardArrowDownIcon />}>
              <h4>Партнеры по аппаратному обеспечению</h4>
            </AccordionSummary>
            <AccordionDetails>
              <div className="accordin-details-container-img">
                <img
                  src="/assets/partners/partners-hardware/baikal.png"
                  alt="img"
                />
                <img
                  src="/assets/partners/partners-hardware/broadcom.png"
                  alt="img"
                />
                <img
                  src="/assets/partners/partners-hardware/hgst.png"
                  alt="img"
                />
                <img
                  src="/assets/partners/partners-hardware/infotecs.png"
                  alt="img"
                />
                <img
                  src="/assets/partners/partners-hardware/intel.png"
                  alt="img"
                />
                <img
                  src="/assets/partners/partners-hardware/mcst.png"
                  alt="img"
                />
                <img
                  src="/assets/partners/partners-hardware/mellanox.png"
                  alt="img"
                />
                <img
                  src="/assets/partners/partners-hardware/t-platforms.png"
                  alt="img"
                />
              </div>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<KeyboardArrowDownIcon />}>
              <h4>Дистрибьюторы</h4>
            </AccordionSummary>
            <AccordionDetails>
              <div className="accordin-details-container-img">
                <img src="/assets/partners/distributor/distributor.png" alt="img" />
              </div>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>

      <div className="partners-about-content">
        <div className="partners-about-img partners-about-info"></div>
        <div className="partners-about-info">
          <div className="partners-text">
            <h2>О нас</h2>
            <p className="info-text">
              BAUM Inform – центр компетенций по разработке, производству и
              продвижению собственных продуктов и услуг в сфере IT-технологий:
              система хранения данных (СХД), аналитика Big DATA, готовые модули
              Internet of things, цифровая безопасность, искусственный
              интеллект.
            </p>
            <Button
              className="btn btn-form"
              onClick={handleClickAboutUs}
              endIcon={<ArrowRightAltIcon />}
            >
              Подробнее
            </Button>
          </div>
        </div>
      </div>
      <ApplicationForm/>
      <Footer />
    </div>
  );
};
export default Partners;
