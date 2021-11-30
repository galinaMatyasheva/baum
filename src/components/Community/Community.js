import React, { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button,
} from "@material-ui/core";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";

import "./Community.scss";
import arrowBottomImg from "../../assets/arrow-bottom.svg";
import arrowBottomBlackImg from "../../assets/arrow-bottom-black.svg";
import ApplicationForm from "../../content/ApplicationForm/ApplicationForm";

const Community = () => {
  const [isButtonHovered, setIsButtonHovered] = useState({
    isButtonHovered: [false, false, false],
  });

  const changedArrow = (hoverIndex) => {
    isButtonHovered.isButtonHovered = [false, false, false];
    isButtonHovered.isButtonHovered[hoverIndex] = true;
    setIsButtonHovered({ ...isButtonHovered });
  };

  const changedArrowLeave = () => {
    isButtonHovered.isButtonHovered = [false, false, false];
    setIsButtonHovered({ ...isButtonHovered });
  };

  return (
    <section className="community-container">
      <div className="community-container-info">
        <div className="community-img community-info">
          <h1>Community</h1>
        </div>
        <div className="community-info">
          <Accordion>
            <AccordionSummary
              onMouseEnter={() => changedArrow(0)}
              onMouseLeave={() => changedArrowLeave()}
              expandIcon={
                !isButtonHovered.isButtonHovered[0] ? (
                  <img src={arrowBottomImg} alt="img" />
                ) : (
                  <img src={arrowBottomBlackImg} alt="img" />
                )
              }
            >
              <h4>База знаний</h4>
            </AccordionSummary>
            <AccordionDetails>
              <div>
                <p className="accordion-text">
                  В нашей базе знаний можно узнать об описании системы,
                  разобраться с настройками, скачать инструкции и найти решение
                  любой проблемы.
                </p>
                <Button
                  className="btn btn-light"
                  endIcon={<ArrowRightAltIcon />}
                >
                  Войти в личный кабинет
                </Button>
              </div>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              onMouseEnter={() => changedArrow(1)}
              onMouseLeave={() => changedArrowLeave()}
              expandIcon={
                !isButtonHovered.isButtonHovered[1] ? (
                  <img src={arrowBottomImg} alt="img" />
                ) : (
                  <img src={arrowBottomBlackImg} alt="img" />
                )
              }
            >
              <h4>Сообщество СХД и ИИ</h4>
            </AccordionSummary>
            <AccordionDetails>
              <p className="accordion-text">
                Мы формируем сообщество IT-профессионалов по AI и СХД.
                Разрабатываем учебные курсы, обучаем, создаем продукты и
                отстаиваем свои идеи на профессиональных конференциях.
              </p>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              onMouseEnter={() => changedArrow(2)}
              onMouseLeave={() => changedArrowLeave()}
              expandIcon={
                !isButtonHovered.isButtonHovered[2] ? (
                  <img src={arrowBottomImg} alt="img" />
                ) : (
                  <img src={arrowBottomBlackImg} alt="img" />
                )
              }
            >
              <h4>Партнёры и дистрибьюторы</h4>
            </AccordionSummary>
            <AccordionDetails>
              <div>
                <p className="accordion-text">
                  Мы объединили наши усилия для ускорения и реализации наших
                  проектов вместе
                </p>
                <Button
                  className="btn btn-light"
                  endIcon={<ArrowRightAltIcon />}
                >
                  Читать дальше
                </Button>
              </div>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>

      <ApplicationForm />
    </section>
  );
};

export default Community;
