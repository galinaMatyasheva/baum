import React from "react";

import "./SupportPlatform.scss";
import Form from "../../../../content/Form/Form";
import Navbar from "../Navbar/Navbar";
import Header from "../../../Header/Header";
import Footer from "../../../Footer/Footer";

const SupportPlatform = () => {
  return (
    <div className="support-container">
      <Header />
      <Navbar />
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
            наших продуктов.
          </p>
          <a href="/pdf/support-platform.pdf" download className="btn btn-dark">
            Скачать pdf файл
          </a>
        </div>
      </div>
      <Form />
      <Footer />
    </div>
  );
};
export default SupportPlatform;