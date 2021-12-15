import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@material-ui/core";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import "./FunctionalSwarm.scss";
import Header from "../../../Header/Header";
import Footer from "../../../Footer/Footer";
import NavbarSwarm from "../Navbar/Navbar";

const FunctionalSwarm = () => {
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
            <AccordionSummary expandIcon={<KeyboardArrowDownIcon />}>
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
            <AccordionSummary expandIcon={<KeyboardArrowDownIcon />}>
              <h4>SLA</h4>
            </AccordionSummary>
            <AccordionDetails>
              <p className="accordion-text">
                Обеспечение SLA по качеству обслуживания для групп приложений.
              </p>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<KeyboardArrowDownIcon />}>
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
            <AccordionSummary expandIcon={<KeyboardArrowDownIcon />}>
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
            <AccordionSummary expandIcon={<KeyboardArrowDownIcon />}>
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
            <h2>Ознакомьтесь с системой хранения данных BAUM UDS</h2>
            <p className="info-text">
              BAUM UDS предоставляет качественный продукт для управления
              данными, с применением современных флэш-технологий, как на
              файловом, так и на блочном уровне для самых требовательных
              приложений таких как: базы данных, виртуальных сред, резервное
              копирования.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default FunctionalSwarm;
