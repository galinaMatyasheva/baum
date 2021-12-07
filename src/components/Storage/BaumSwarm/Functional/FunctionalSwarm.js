import React, { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@material-ui/core";

import "./FunctionalSwarm.scss";
import arrowBottomImg from "../../../../assets/arrow-bottom.svg";
import arrowBottomBlackImg from "../../../../assets/arrow-bottom-black.svg";
import Header from "../../../Header/Header";
import Footer from "../../../Footer/Footer";
import NavbarSwarm from "../Navbar/Navbar";

const FunctionalSwarm = () => {
  const [isButtonHoveredLeft, setIsButtonHoveredLeft] = useState({
    isButtonHoveredLeft: [false, false, false],
  });

  const [isButtonHoveredRight, setIsButtonHoveredRight] = useState({
    isButtonHoveredRight: [false, false],
  });

  const changedArrowLeft = (hoverIndex) => {
    isButtonHoveredLeft.isButtonHoveredLeft = [false, false, false];
    isButtonHoveredLeft.isButtonHoveredLeft[hoverIndex] = true;
    setIsButtonHoveredLeft({ ...isButtonHoveredLeft });
  };

  const changedArrowLeaveLeft = () => {
    isButtonHoveredLeft.isButtonHoveredLeft = [false, false];
    setIsButtonHoveredLeft({ ...isButtonHoveredLeft });
  };

  const changedArrowRight = (hoverIndex) => {
    isButtonHoveredRight.isButtonHoveredRight = [false, false, false];
    isButtonHoveredRight.isButtonHoveredRight[hoverIndex] = true;
    setIsButtonHoveredRight({ ...isButtonHoveredRight });
  };

  const changedArrowLeaveRight = () => {
    isButtonHoveredRight.isButtonHoveredRight = [false, false];
    setIsButtonHoveredRight({ ...isButtonHoveredRight });
  };

  return (
    <div className="functional-container">
      <Header />
      <NavbarSwarm />
      <div className="functional-container-info">
        <h1 className="title-baum title-orange">Функционал</h1>
        <div className="functional-img"></div>
      </div>

      <div className="accordion-container">
        <div className="accordion-info">
          <Accordion>
            <AccordionSummary
              onMouseEnter={() => changedArrowLeft(0)}
              onMouseLeave={() => changedArrowLeaveLeft()}
              expandIcon={
                !isButtonHoveredLeft.isButtonHoveredLeft[0] ? (
                  <img src={arrowBottomImg} alt="img" />
                ) : (
                  <img src={arrowBottomBlackImg} alt="img" />
                )
              }
            >
              <h4>Производительность</h4>
            </AccordionSummary>
            <AccordionDetails>
              <div>
                <p className="accordion-text">
                  {" "}
                  Высокая производительность при параллельном доступе к данным
                </p>
              </div>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              onMouseEnter={() => changedArrowLeft(1)}
              onMouseLeave={() => changedArrowLeaveLeft()}
              expandIcon={
                !isButtonHoveredLeft.isButtonHoveredLeft[1] ? (
                  <img src={arrowBottomImg} alt="img" />
                ) : (
                  <img src={arrowBottomBlackImg} alt="img" />
                )
              }
            >
              <h4>SLA</h4>
            </AccordionSummary>
            <AccordionDetails>
              <p className="accordion-text">
                Обеспечение SLA по качеству обслуживания для групп приложений.
              </p>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              onMouseEnter={() => changedArrowLeft(2)}
              onMouseLeave={() => changedArrowLeaveLeft()}
              expandIcon={
                !isButtonHoveredLeft.isButtonHoveredLeft[2] ? (
                  <img src={arrowBottomImg} alt="img" />
                ) : (
                  <img src={arrowBottomBlackImg} alt="img" />
                )
              }
            >
              <h4>Протоколы</h4>
            </AccordionSummary>
            <AccordionDetails>
              <p className="accordion-text">
                S3, ISCSI, SMB, HDFS, NFS, REST, FTP, HTTP.
              </p>
            </AccordionDetails>
          </Accordion>
        </div>
        <div className="accordion-info">
          <Accordion>
            <AccordionSummary
              onMouseEnter={() => changedArrowRight(0)}
              onMouseLeave={() => changedArrowLeaveRight()}
              expandIcon={
                !isButtonHoveredRight.isButtonHoveredRight[0] ? (
                  <img src={arrowBottomImg} alt="img" />
                ) : (
                  <img src={arrowBottomBlackImg} alt="img" />
                )
              }
            >
              <h4>Масштабируемость</h4>
            </AccordionSummary>
            <AccordionDetails>
              <div>
                <p className="accordion-text">
                  Быстрая линейная масштабируемость. Емкость хранения и
                  пропускная способность практически не ограничена.
                </p>
              </div>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              onMouseEnter={() => changedArrowRight(1)}
              onMouseLeave={() => changedArrowLeaveRight()}
              expandIcon={
                !isButtonHoveredRight.isButtonHoveredRight[1] ? (
                  <img src={arrowBottomImg} alt="img" />
                ) : (
                  <img src={arrowBottomBlackImg} alt="img" />
                )
              }
            >
              <h4>Отказоустойчивость</h4>
            </AccordionSummary>
            <AccordionDetails>
              <p className="accordion-text">
              Дисковая отказоустойчивость и высокая доступность данных.
              </p>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>

      <div className="functional-about-baum-swarm-content">
        <div className="functional-about-baum-swarm-img functional-about-baum-swarm-info"></div>
        <div className="functional-about-baum-swarm-info">
          <div className="functional-text">
            <h2>
              Ознакомьтесь с системой хранения данных BAUM SWARM (scale out)
            </h2>
            <p className="info-text">
              Воспользуйтесь преимуществами системы хранения данных,
              использующих постоянный корпоративный сервис по хранению данных в
              любом облаке по вашему выбору.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default FunctionalSwarm;
