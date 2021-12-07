import React, { useState, useRef } from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from "@material-ui/core";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";

import "./DocumentationPlatform.scss";
import imgFlash from "../../../../assets/baum-swarm/models-img/flash.png";
import imgArchive from "../../../../assets/baum-swarm/models-img/archive.png";
import Navbar from "../Navbar/Navbar";
import Header from "../../../Header/Header";
import Footer from "../../../Footer/Footer";

const DocumentationPlatform = () => {
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
            <a
              href={`/pdf/platform/baum-ai-platform.pdf`}
              download
              className="btn btn-dark"
            >
              Скачать pdf файл
            </a>
          </div>
          <div className="documentation-container-text">
            <h3>О компании и продуктах</h3>
            <a
              href={`/pdf/platform/about-company.pdf`}
              download
              className="btn btn-dark"
            >
              Скачать pdf файл
            </a>
          </div>
        </div>
      </div>

      <div className="documentation-about-company-content">
        <div className="documentation-about-company-img documentation-about-company-info"></div>
        <div className="documentation-about-company-info">
          <div className="documentation-text">
            <h2>О компании и продуктах</h2>
            <p className="info-text">
              BAUM Inform – центр компетенций по разработке, производству и
              продвижению российских продуктов и услуг в сфере IT-технологий:
              система хранения данных (СХД), аналитика Big DATA, готовые модули
              Internet of things, цифровая безопасность, искусственный
              интеллект.
            </p>
            <Button
              className="btn btn-outlined-light"
              endIcon={<ArrowRightAltIcon />}
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
