import React from "react";
import { Button } from "@material-ui/core";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import { useNavigate } from "react-router-dom";

import "./DocumentationPlatform.scss";
import Navbar from "../Navbar/Navbar";
import Header from "../../../Header/Header";
import Footer from "../../../Footer/Footer";

const DocumentationPlatform = () => {
  let navigate = useNavigate();

  const scrollToTop = () => {
    setTimeout(() => {
      const aboutPageNode = document.getElementById("app");
      aboutPageNode.scrollIntoView({ behavior: "smooth" });
    }, 0);
  };

  const handleClickBaumUds = () => {
    navigate("/baum-uds");
    scrollToTop();
  }; 

  return (
    <div className="documentation-container">
      <Header />
      <Navbar />

      <div className="documentation-container-info">
        <h1 className="title-baum title-gray">Документация</h1>
        <div className="documentation-img"></div>
      </div>

      <div className="documentation-models-info">
        <div className="documentation-container-content">
          <div className="documentation-container-text">
            <h3>Руководство администратора</h3>
            <div className="documentation-container-btn">
              <Button
                href={`/pdf/platform/baum-ai-platform.pdf`}
                download
                className="btn btn-dark"
              >
                Скачать pdf файл
              </Button>
            </div>
          </div>
          <div className="documentation-container-text">
            <h3>О компании и продуктах</h3>
            <div className="documentation-container-btn">
              <Button
                href={`/pdf/platform/about-company.pdf`}
                download
                className="btn btn-dark"
              >
                Скачать pdf файл
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="documentation-about-company-content">
        <div className="documentation-about-company-img documentation-about-company-info"></div>
        <div className="documentation-about-company-info">
          <div className="documentation-text">
            <h2>Ознакомьтесь с системой хранения данных BAUM UDS</h2>
            <p className="info-text">
              BAUM UDS предоставляет качественный продукт для управления
              данными, с применением современных флэш-технологий, как на
              файловом, так и на блочном уровне для самых требовательных
              приложений таких как: базы данных, виртуальных сред, резервное
              копирования.
            </p>
            <Button
              className="btn btn-outlined-light"
              endIcon={<ArrowRightAltIcon />}
              onClick={handleClickBaumUds}
            >
              Подробнее
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default DocumentationPlatform;
