import React, { useState } from "react";

import "./Model.scss";
import data from "../../../../content/TableData";
import Navbar from "../Navbar/Navbar";
import Header from "../../../Header/Header";
import Footer from "../../../Footer/Footer";
import ModelUDS from "../../../../content/ModelUDS/ModelUDS";

const Model = () => {
  const [curModel, setCurModel] = useState(data[0]);

  return (
    <div className="model-container">
      <Header />
      <Navbar />

      <div className="model-container-info">
        <h1 className="title-baum title-purple">Модели</h1>
        <div className="model-img"></div>
      </div>
      <ModelUDS />
      <Footer />
    </div>
  );
};
export default Model;
