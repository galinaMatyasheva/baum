import React from "react";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import { Button } from "@material-ui/core";
import { useNavigate } from "react-router-dom";

import "./BaumInformCreate.scss";

const BaumInformCreate = () => {
  let navigate = useNavigate();

  const scrollToTop = () => {
    setTimeout(() => {
      const aboutPageNode = document.getElementById("app");
      aboutPageNode.scrollIntoView({ behavior: "smooth" });
    }, 0);
  };

  const handleClickAboutUs = () => {
    navigate("/about-us");
    scrollToTop();
  };
  return (
    <div className="baum-inform-create-container">
      <div className="baum-inform-main-content">
        <div className="baum-inform-create-content">
          <h3> Надежность</h3>
          <h3>Производительность</h3>
          <h3>Инновационность</h3>
        </div>
        <div className="baum-inform-create-content">
          <p className="info-text">
            Наша амбициозная команда, создает инновационные системы хранения и
            обработки информации, которые повышают эффективность принятия
            решений и улучшают качество жизни.
          </p>
        </div>
      </div>
      <div className="btn-container">
        <Button
          className="btn btn-outlined-light-border"
          endIcon={<ArrowRightAltIcon />}
          onClick={handleClickAboutUs}
        >
          Читать далее
        </Button>
      </div>
    </div>
  );
};

export default BaumInformCreate;
