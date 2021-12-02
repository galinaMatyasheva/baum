import React from "react";

import Form from "../../content/Form/Form";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./Vacancies.scss";

const Vacancies = () => {
  return (
    <section className="vacancies-container">
      <Header/>
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
                по адресу{" "}
                <a href="mailto:hr@baum-inform.ru">hr@baum-inform.ru</a>
              </p>
            </div>
          </div>
        </div>
        <div className="vacancies-img vacancies-info"></div>
      </div>
      <Form />
      <Footer/>
    </section>
  );
};

export default Vacancies;
