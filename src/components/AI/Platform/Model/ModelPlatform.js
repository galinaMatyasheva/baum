import React, { useState } from "react";

import "./ModelPlatform.scss";

import imgModelB1000F1000 from "../../../../assets/baum-uds/models-img/B1000-F1000.png";
import modelIcon1 from "../../../../assets/baum-uds/model-icon-1.svg";
import TableModel from "../../../../content/TableModel/TableModel";
import data from "../../../../content/TableData";
import Navbar from "../Navbar/Navbar";
import Header from "../../../Header/Header";
import Footer from "../../../Footer/Footer";

const ModelPlatform = () => {
  const [curModel, setCurModel] = useState(data[12]);

  return (
    <div className="model-container">
      <Header />
      <Navbar />

      <div className="model-container-info">
        <h1 className="title-baum title-purple">Модели</h1>
        <div className="model-img"></div>
      </div>
      <div className="model-wrap">
        <div className="model-buttons-swarm">
          <div className="models-group group-first">
            <div className="polygon-shadow">
              <div className="model-polygon-wrap">
                <div
                  className="models-group-button"
                  onClick={() => {
                    setCurModel(data[12]);
                  }}
                >
                  <div className="model-button-icon-wrap">
                    <img
                      src={modelIcon1}
                      alt="img"
                      className="model-button-icon"
                    />
                    <h6>AIAP 2000</h6>
                  </div>
                  <div className="model-button-img">
                    <img src={imgModelB1000F1000} alt="img" />
                  </div>
                </div>
              </div>
            </div>
            <div className="polygon-shadow">
              <div className="model-polygon-wrap">
                <div
                  className="models-group-button"
                  onClick={() => {
                    setCurModel(data[13]);
                  }}
                >
                  <div className="model-button-icon-wrap">
                    <img
                      src={modelIcon1}
                      alt="img"
                      className="model-button-icon"
                    />
                    <h6>AIAP 6000</h6>
                  </div>
                  <div className="model-button-img">
                    <img src={imgModelB1000F1000} alt="img" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <TableModel data={curModel} />
      </div>

      <Footer />
    </div>
  );
};
export default ModelPlatform;
