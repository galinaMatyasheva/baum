import React, {useState} from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button,
} from "@material-ui/core";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";

import "./Community.scss";
import arrowBottomImg from "../../assets/arrow-bottom.svg";
import arrowBottomBlackImg from "../../assets/arrow-bottom-black.svg"
import ApplicationForm from "../../content/ApplicationForm/ApplicationForm";

const Community = () => {
  const [buttonHovered, setButtonHovered] = useState(false);
  const [buttonHovered1, setButtonHovered1] = useState(false);
  const [buttonHovered2, setButtonHovered2] = useState(false);

  return (
    <section className="community-container">
      <div className="community-container-info">
        <div className="community-img community-info">
          <h1>Community</h1>
        </div>
        <div className="community-info">
          <Accordion>
            <AccordionSummary
             onMouseEnter={() => setButtonHovered(true)} 
             onMouseLeave={() => setButtonHovered(false)}
              expandIcon={!buttonHovered ? <img src={arrowBottomImg} alt="img"/> : <img src={arrowBottomBlackImg} alt="img"/>}
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
             onMouseEnter={() => setButtonHovered1(true)} 
             onMouseLeave={() => setButtonHovered1(false)}
             expandIcon={!buttonHovered1 ? <img src={arrowBottomImg} alt="img"/> : <img src={arrowBottomBlackImg} alt="img"/>}
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
             onMouseEnter={() => setButtonHovered2(true)} 
             onMouseLeave={() => setButtonHovered2(false)}
             expandIcon={!buttonHovered2 ? <img src={arrowBottomImg} alt="img"/> : <img src={arrowBottomBlackImg} alt="img"/>}
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
