import React from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

import "./EducationDetails.scss";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import data from "../../../content/EducationData";
import Navbar from "../Navbar/Navbar";

const EducationDetails = () => {
  let param = useParams();
  const key = param.key;
  let navigate = useNavigate();

  return (
    <div className="education-container">
      <Header /> 
      <Navbar />
      <div className="education-container-info">
        <h1 className="title-baum title-purple">Образование</h1>
        <div className="education-img"></div>
      </div>
      <div className="education-content">
        <div className="education-content-info">
          <div className="education-content-about">
            <h3>{data[key].title}</h3>
            <p className="info-text">{data[key].text}</p>
          </div>
        </div>
        <div className="education-content-img"></div>
      </div>
      <Footer />
    </div>
  );
};
export default EducationDetails;
