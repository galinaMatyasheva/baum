import React, { useState, useRef } from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from "@material-ui/core";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";

import "./Documentation.scss";
import imgModelB1000F1000 from "../../../../assets/baum-uds/models-img/B1000-F1000.png";
import imgSPACE3500Nx6500Nx from "../../../../assets/baum-uds/models-img/SPACE3500Nx-6500Nx.png";
import imgUDS1000 from "../../../../assets/baum-uds/models-img/UDS1000.png";
import imgUDS2000 from "../../../../assets/baum-uds/models-img/UDS2000.png";
import imgUDS80002500F4500F from "../../../../assets/baum-uds/models-img/UDS8000-2500F-4500F.png";
import imgBFMS220 from "../../../../assets/baum-uds/models-img/BF.MS.2.20.png";
import Navbar from "../Navbar/Navbar";
import Header from "../../../Header/Header";
import Footer from "../../../Footer/Footer";

const Documentation = () => {
  const elementRef = useRef();
  const [model, setModel] = useState("");
  const [version, setVersion] = useState("");

  const handleChangeModel = (e) => {
    setModel(e.target.value);
  };

  const handleChangeVersion = (e) => {
    setVersion(e.target.value);
  };

  const imageMapper = (model) => {
    if (model === "B1000" || model === "F1000") {
      return imgModelB1000F1000;
    } else if (model === "UDS1000") {
      return imgUDS1000;
    } else if (model === "UDS2000") {
      return imgUDS2000;
    } else if (
      model === "UDS8000" ||
      model === "UDS2500F" ||
      model === "UDS4500F"
    ) {
      return imgUDS80002500F4500F;
    } else if (model === "БФ.MS.2-20") {
      return imgBFMS220;
    } else if (model === "SPACE3500NX" || model === "SPACE6500NX") {
      return imgSPACE3500Nx6500Nx;
    }
    return imgModelB1000F1000;
  };

  const models = [
    "B1000",
    "F1000",
    "UDS1000",
    "UDS2000",
    "UDS8000",
    "UDS2500F",
    "UDS4500F",
    "БФ.MS.2-20",
    "SPACE3500NX",
    "SPACE6500NX",
  ];

  const versions = [
    "3.4",
    "3.5",
    "4.0",
    "4.1",
    "4.2",
    "4.3",
    "4.3.3",
    "4.4.0",
    "4.4.1",
    "5.0.0",
  ];

  return (
    <div className="documentation-container">
      <Header/>
      <Navbar />

      <div className="documentation-container-info">
        <h1 className="title-baum title-gray">Документация</h1>
        <div className="documentation-img"></div>
      </div>

      <div className="documentation-models-info">
        <div className="documentation-models-img">
          <img src={imageMapper(model)} alt="img" />
        </div>
        <div className="documentation-container-content">
          <div className="documentation-models-form">
            <div>
              <p
                style={
                  model ? { marginBottom: "2.2rem" } : { marginBottom: "1rem" }
                }
              >
                Выберите модель:
              </p>
              <div className="document-model-form">
                <FormControl fullWidth>
                  {model === "" ? (
                    <InputLabel id="model-label">Модель</InputLabel>
                  ) : null}
                  <Select
                    labelId="model-label"
                    value={model}
                    label="Модель"
                    onChange={handleChangeModel}
                  >
                    {models.map((modelItem) => (
                      <MenuItem value={modelItem}>{modelItem}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>
            </div>
            <div>
              <p
                style={
                  version
                    ? { marginBottom: "2.2rem" }
                    : { marginBottom: "1rem" }
                }
              >
                Выберите версию:
              </p>
              <div className="document-model-form">
                <FormControl fullWidth>
                  {version === "" ? (
                    <InputLabel id="version-label">Версия</InputLabel>
                  ) : null}
                  <Select
                    labelId="version-label"
                    value={version}
                    label="Версия"
                    onChange={handleChangeVersion}
                  >
                    {versions.map((versionItem) => (
                      <MenuItem value={versionItem}>{versionItem}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>
            </div>
          </div>
          <a
            ref={elementRef}
            href={`/pdf/models/${model}/${version}.pdf`}
            download
            className="btn btn-dark"
          >
            Скачать pdf файл
          </a>
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
      <Footer/>
    </div>
  );
};
export default Documentation;
