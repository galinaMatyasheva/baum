import React from "react";

import "./Software.scss";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import TableSoftware from "../../../content/TableSoftware/TableSoftware";
import dataSoftware from "../../../content/TableDataSoftware";
import { useState } from "react";

const Software = () => {
  const [curModel, setCurModel] = useState(dataSoftware[0]);
  return (
    <section className="software-container">
      <Header/>
      <div className="software-container-info">
        <h1 className="title-baum title">Специальное программное обеспечение</h1>
        <div className="software-img"></div>
      </div>
      <TableSoftware dataSoftware={curModel}/>
      <Footer/>
    </section>
  );
};

export default Software;