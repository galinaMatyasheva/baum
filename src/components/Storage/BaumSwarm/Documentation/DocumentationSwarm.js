import React, { useState, useRef } from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from "@material-ui/core";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";

import "./DocumentationSwarm.scss";
import imgModelB1000F1000 from "../../../../assets/baum-uds/models-img/B1000-F1000.png";
import Navbar from "../Navbar/Navbar";
import Header from "../../../Header/Header";
import Footer from "../../../Footer/Footer";

const DocumentationSwarm = () => {
  const elementRef = useRef();
  const [model, setModel] = useState("");
  const [version, setVersion] = useState("");

  const handleChangeModel = (e) => {
    setModel(e.target.value);
  };

  const handleChangeVersion = (e) => {
    setVersion(e.target.value);
  };

  const models = ["Flash", "Archive"];

  const versions = ["Версия 1", "Версия 2"];

  return (
    <div className="documentation-container">
      <Header />
      <Navbar />

      <div className="documentation-container-info">
        <h1 className="title-baum title-gray">Документация</h1>
        <div className="documentation-img"></div>
      </div>

      <div className="documentation-models-info">
        <div className="documentation-models-img">
          <img src={imgModelB1000F1000} alt="img" />
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
          <Button
            ref={elementRef}
            // href={`/pdf/models-baum-swarm/${model}/${version}.pdf`}
            download
            className="btn btn-dark"
          >
            Скачать pdf файл
          </Button>
        </div>
      </div>

      <div className="documentation-about-company-content">
        <div className="documentation-about-company-img documentation-about-company-info"></div>
        <div className="documentation-about-company-info">
          <div className="documentation-text">
            <h2>О компании и продуктах</h2>
            <p className="info-text">
              Гармоничное развитие нашей схд заключается в разработке платформы
              прикладного искусственного интеллекта, которая может работать с
              данными любых источников
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
export default DocumentationSwarm;
