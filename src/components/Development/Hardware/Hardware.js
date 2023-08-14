import React from "react";

import "./Hardware.scss";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import ModelUDS from "../../../content/ModelUDS/ModelUDS";

const Hardware = () => {
  return (
    <section className="hardware-container">
      <Header/>
      <div className="hardware-container-info">
        <h1 className="title-baum title">Программно-технические комплексы</h1>
        <div className="hardware-img"></div>
      </div>
      <ModelUDS />
      <Footer/>
    </section>
  );
};

export default Hardware;
