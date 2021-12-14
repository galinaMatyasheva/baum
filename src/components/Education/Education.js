import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button,
} from "@material-ui/core";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import { useNavigate } from "react-router-dom";

import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./Education.scss";

const Education = () => {
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
  const handleClickDetails = (key) => {
    navigate("/education/details/" + key);
    scrollToTop();
  };

  return (
    <section className="education-container">
      <Header />
      <div className="education-container-info">
        <h1 className="title-baum title-orange">Обучение</h1>
        <div className="education-img"></div>
      </div>

      <div className="education-info-about">
        <h4>Обучение на базе МГТУ им. Н.Э. Баумана</h4>
        <p>Обучение осуществляется совместно с МГТУ им. Н.Э. Баумана.</p>
        <div className="link-arrow">
          <a
            target="_blank"
            href="http://edu.bmstu.ru/napravleniya-obucheniya/"
          >
            Узнать больше
          </a>
          <ArrowRightAltIcon />
        </div>
      </div>

      <div className="accordion-container">
        <div className="accordion-info">
          <Accordion>
            <AccordionSummary expandIcon={<KeyboardArrowDownIcon />}>
              <h4>Уровень 1: Основные технологии</h4>
            </AccordionSummary>
            <AccordionDetails>
              <div>
                <p className="accordion-text">
                  Data Science сегодня — это одно из самых востребованных
                  направлений подготовки в бизнес-аналитике. В основе data
                  science лежит работа с большими данными.
                </p>
                <Button
                  className="btn btn-outlined-dark"
                  endIcon={<ArrowRightAltIcon />}
                  onClick={() => handleClickDetails("0")}
                >
                  Узнать больше
                </Button>
              </div>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<KeyboardArrowDownIcon />}>
              <h4>Уровень 3: Нейронные сети</h4>
            </AccordionSummary>
            <AccordionDetails>
              <div>
                <p className="accordion-text">
                  Нейронные сети – это математические модели и их программное
                  воплощение.
                </p>
                <Button
                  className="btn btn-outlined-dark"
                  endIcon={<ArrowRightAltIcon />}
                  onClick={() => handleClickDetails("2")}
                >
                  Узнать больше
                </Button>
              </div>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<KeyboardArrowDownIcon />}>
              <h4>
                Машинное и глубокое обучение, прикладной искусственный интеллект
                и сильный искусственный интеллект
              </h4>
            </AccordionSummary>
            <AccordionDetails>
              <div>
                <p className="accordion-text">
                  Машинное и глубокое обучение (Machine and deep learning) —
                  технологии искусственного интеллекта, в основе которых лежит
                  самообучение созданных алгоритмов.
                </p>
                <Button
                  className="btn btn-outlined-dark"
                  endIcon={<ArrowRightAltIcon />}
                  onClick={() => handleClickDetails("4")}
                >
                  Узнать больше
                </Button>
              </div>
            </AccordionDetails>
          </Accordion>
        </div>
        <div className="accordion-info">
          <Accordion>
            <AccordionSummary expandIcon={<KeyboardArrowDownIcon />}>
              <h4>Уровень 2: Машинное обучение</h4>
            </AccordionSummary>
            <AccordionDetails>
              <div>
                <p className="accordion-text">
                  Машинное обучение (machine learning) — один из основным
                  методов для дата-сайентиста, специалиста по работе с большими
                  данными.
                </p>
                <Button
                  className="btn btn-outlined-dark"
                  endIcon={<ArrowRightAltIcon />}
                  onClick={() => handleClickDetails("1")}
                >
                  Узнать больше
                </Button>
              </div>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<KeyboardArrowDownIcon />}>
              <h4>Уровень 4: Нейронные сети. Продвинутый уровень</h4>
            </AccordionSummary>
            <AccordionDetails>
              <div>
                <p className="accordion-text">
                  Нейронные сети – это математические модели и их программное
                  воплощение.
                </p>
                <Button
                  className="btn btn-outlined-dark"
                  endIcon={<ArrowRightAltIcon />}
                  onClick={() => handleClickDetails("3")}
                >
                  Узнать больше
                </Button>
              </div>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>

      <div className="education-about-content">
        <div className="education-about-img education-about-info"></div>
        <div className="education-about-info">
          <div className="education-text">
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
      <Footer />
    </section>
  );
};

export default Education;
