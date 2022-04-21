import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@material-ui/core";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import VacanciesForm from "../Vacancies/VacanciesForm";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./Vacancies.scss";
import data from "../../content/VacantionsData";

const Vacancies = () => {
  const olList = (value) => {
    if (value.type === "h4") {
      return <h4>{value.title}</h4>;
    } else if (value.type === "ol") {
      return (
        <ol>
          {value.inside_blocks.map((insideBlock) => {
            if (insideBlock.list) {
              return(
                <>
                 <li>{insideBlock.text}</li>
                <ul type="disc" className={insideBlock.list.name}>
                  {insideBlock.list.inside_blocks && insideBlock.list.inside_blocks.map((listItem)=>(
                     <li>{listItem.text}</li>
                  ))}
                </ul>
                </> )
               
            } else {
              return <li>{insideBlock.text}</li>;
            }
          })}
        </ol>
      );
    }
  };
  return (
    <section className="vacancies-container">
      <Header />
      <div className="vacancies-container-info">
        <div className="vacancies-info">
          <div>
            <h1 className="title title-dark">Вакансии</h1>
            <div className="vacancies-content">
              <p className="info-text">
                Мы активно развиваемся и для реализации наших амбициозных планов
                нам нужны энергичные и целеустремленные профессионалы. Если вы
                хотите присоединиться к нашей увлеченной и дружной команде,
                присылайте ваше резюме нашему специалисту по подбору персонала
                по адресу
                {" "}
                <a href="mailto:hr@baum-inform.ru"> hr@baum-inform.ru</a>
              </p>
            </div>
          </div>
        </div>
        <div className="vacancies-img vacancies-info"></div>
      </div>
      <div className="accordion-container">
        <div className="accordion-info">
          {data.map((value) => (
            <Accordion>
              <AccordionSummary expandIcon={<KeyboardArrowDownIcon />}>
                {/* vacancy */}

                <h3>{value.vacancy}</h3>
              </AccordionSummary>

              <AccordionDetails>
                {/* all details h4, p, ol li, ul li */}
                <div>
                  {value.requirements &&
                    value.requirements.map((req) => {
                      return olList(req);
                    })}
                  {value.taskTypes &&
                    value.taskTypes.map((taskType) => {
                      return olList(taskType);
                    })}
                  {value.stack && (
                    <>
                      <h4>{value.stack.title}</h4>
                      <p>{value.stack.text.text}</p>
                    </>
                  )}

                  {value.welcomed &&
                    value.welcomed.map((welc) => {
                      return olList(welc);
                    })}

                  {value.responsibilities &&
                    value.responsibilities.map((resp) => {
                      return olList(resp);
                    })}

                  {value.conditions &&
                    value.conditions.map((cond) => {
                      return olList(cond);
                    })}
                </div>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
      </div>
      <VacanciesForm/>
      {/* <Form /> */}
      <Footer />
    </section>
  );
};

export default Vacancies;
