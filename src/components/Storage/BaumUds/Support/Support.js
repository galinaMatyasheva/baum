import React from "react";

import "./Support.scss";
import Form from "../../../../content/Form/Form";
import Navbar from "../Navbar/Navbar";
import Header from "../../../Header/Header";
import Footer from "../../../Footer/Footer";

const Support = () => {
  return (
    <div className="support-container">
      <Header/>
      <Navbar/>
      <div className="support-container-info">
        <h1 className="title-baum title-blue">Поддержка</h1>
        <div className="support-img"></div>
      </div>

      <div className="support-container-content">
        <div className="support-content">
          <h3>Регламент технического обслуживания</h3>
        </div>
        <div className="support-content">
          <p className="info-text">
            Настоящий документ устанавливает условия и порядок предоставления
            технического обслуживания оборудования и программного обеспечения
            производства компании АО НПО «БАУМ» для Конечных пользователей
            (Заказчиков) на территории Российской Федерации.
          </p>
          <a href="/pdf/support.pdf" download className="btn btn-dark">
            Скачать pdf файл
          </a>
        </div>
      </div>
      <Form />
      <Footer/>
    </div>
  );
};
export default Support;
