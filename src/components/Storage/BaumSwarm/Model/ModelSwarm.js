import React, { useState } from "react";

import "./ModelSwarm.scss";
import imgModelB1000F1000 from "../../../../assets/baum-uds/models-img/B1000-F1000.png";
import imgSPACE3500Nx6500Nx from "../../../../assets/baum-uds/models-img/SPACE3500Nx-6500Nx.png";
import imgUDS1000 from "../../../../assets/baum-uds/models-img/UDS1000.png";
import imgUDS2000 from "../../../../assets/baum-uds/models-img/UDS2000.png";
import imgUDS80002500F4500F from "../../../../assets/baum-uds/models-img/UDS8000-2500F-4500F.png";
import imgBFMS220 from "../../../../assets/baum-uds/models-img/BF.MS.2.20.png";
import modelIcon1 from "../../../../assets/baum-uds/model-icon-1.svg";
import modelIcon2 from "../../../../assets/baum-uds/model-icon-2.svg";
import modelIcon3 from "../../../../assets/baum-uds/model-icon-3.svg";
import modelIcon4 from "../../../../assets/baum-uds/model-icon-4.svg";
import TableModel from "../../../../content/TableModel/TableModel";
import data from "../../../../content/TableData";
import Navbar from "../Navbar/Navbar";
import Header from "../../../Header/Header";
import Footer from "../../../Footer/Footer";

const ModelSwarm = () => {
  const [curModel, setCurModel] = useState(data[0]);

  return (
    <div className="model-container">
      <Header />
      <Navbar />

      <div className="model-container-info">
        <h1 className="title-baum title-purple">Модели</h1>
        <div className="model-img"></div>
      </div>
      <div className="model-wrap">
        <div className="model-buttons">
          <div className="models-group group-first">
            <div className="polygon-shadow">
              <div className="model-polygon-wrap">
                <div
                  className="models-group-button"
                  onClick={() => {
                    setCurModel(data[0]);
                  }}
                >
                  <div className="model-button-icon-wrap">
                    <img
                      src={modelIcon1}
                      alt="img"
                      className="model-button-icon"
                    />
                    <h6>B1000</h6>
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
                    setCurModel(data[1]);
                  }}
                >
                  <div className="model-button-icon-wrap">
                    <img
                      src={modelIcon1}
                      alt="img"
                      className="model-button-icon"
                    />
                    <h6>F1000</h6>
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
                    setCurModel(data[2]);
                  }}
                >
                  <div className="model-button-icon-wrap">
                    <img
                      src={modelIcon1}
                      alt="img"
                      className="model-button-icon"
                    />
                    <h6>UDS1000</h6>
                  </div>
                  <div className="model-button-img">
                    <img src={imgUDS1000} alt="img" />
                  </div>
                </div>
              </div>
            </div>
            <div className="polygon-shadow">
              <div className="model-polygon-wrap">
                <div
                  className="models-group-button"
                  onClick={() => {
                    setCurModel(data[3]);
                  }}
                >
                  <div className="model-button-icon-wrap">
                    <img
                      src={modelIcon2}
                      alt="img"
                      className="model-button-icon"
                    />
                    <h6>UDS2000</h6>
                  </div>
                  <div className="model-button-img">
                    <img src={imgUDS2000} alt="img" />
                  </div>
                </div>
              </div>
            </div>
            <div className="polygon-shadow">
              <div className="model-polygon-wrap">
                <div
                  className="models-group-button"
                  onClick={() => {
                    setCurModel(data[4]);
                  }}
                >
                  <div className="model-button-icon-wrap">
                    <img
                      src={modelIcon2}
                      alt="img"
                      className="model-button-icon"
                    />
                    <h6>UDS8000</h6>
                  </div>
                  <div className="model-button-img">
                    <img src={imgUDS80002500F4500F} alt="img" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="models-group group-second">
            <div className="polygon-shadow">
              <div className="model-polygon-wrap">
                <div
                  className="models-group-button"
                  onClick={() => {
                    setCurModel(data[5]);
                  }}
                >
                  <div className="model-button-icon-wrap">
                    <img
                      src={modelIcon2}
                      alt="img"
                      className="model-button-icon"
                    />
                    <h6>UDS2500F</h6>
                  </div>
                  <div className="model-button-img">
                    <img src={imgUDS80002500F4500F} alt="img" />
                  </div>
                </div>
              </div>
            </div>
            <div className="polygon-shadow">
              <div className="model-polygon-wrap">
                <div
                  className="models-group-button"
                  onClick={() => {
                    setCurModel(data[6]);
                  }}
                >
                  <div className="model-button-icon-wrap">
                    <img
                      src={modelIcon2}
                      alt="img"
                      className="model-button-icon"
                    />
                    <h6>UDS4500F</h6>
                  </div>
                  <div className="model-button-img">
                    <img src={imgUDS80002500F4500F} alt="img" />
                  </div>
                </div>
              </div>
            </div>
            <div className="polygon-shadow">
              <div className="model-polygon-wrap">
                <div
                  className="models-group-button"
                  onClick={() => {
                    setCurModel(data[7]);
                  }}
                >
                  <div className="model-button-icon-wrap">
                    <img
                      src={modelIcon3}
                      alt="img"
                      className="model-button-icon"
                    />
                    <h6>БФ.MS.2/20</h6>
                  </div>
                  <div className="model-button-img model-bf">
                    <img src={imgBFMS220} alt="img" />
                  </div>
                </div>
              </div>
            </div>
            <div className="polygon-shadow">
              <div className="model-polygon-wrap">
                <div
                  className="models-group-button"
                  onClick={() => {
                    setCurModel(data[8]);
                  }}
                >
                  <div className="model-button-icon-wrap">
                    <img
                      src={modelIcon4}
                      alt="img"
                      className="model-button-icon"
                    />
                    <h6>SPACE3500NX</h6>
                  </div>
                  <div className="model-button-img model-space">
                    <img src={imgSPACE3500Nx6500Nx} alt="img" />
                  </div>
                </div>
              </div>
            </div>
            <div className="polygon-shadow">
              <div className="model-polygon-wrap">
                <div
                  className="models-group-button"
                  onClick={() => {
                    setCurModel(data[9]);
                  }}
                >
                  <div className="model-button-icon-wrap">
                    <img
                      src={modelIcon4}
                      alt="img"
                      className="model-button-icon"
                    />
                    <h6>SPACE6500NX</h6>
                  </div>
                  <div className="model-button-img model-space">
                    <img src={imgSPACE3500Nx6500Nx} alt="img" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="model-levels">
          <div className="model-entry-level level">
            <p className="text-model-level">Entry Level</p>
            <div className="model-level-line"></div>
          </div>
          <div className="model-mid-range level">
            <p className="text-model-level">Mid Range</p>
            <div className="model-level-line"></div>
          </div>
          <div className="model-shd level">
            <p>Сетр. СХД</p>
          </div>
          <div className="model-high-end level">
            <p className="text-model-level">High-End NVMe</p>
            <div className="model-level-line"></div>
          </div>
        </div>

        <TableModel data={curModel} />
      </div>

      <Footer />
    </div>
  );
};
export default ModelSwarm;
