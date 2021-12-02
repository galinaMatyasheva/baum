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

  const handleClickCreate = () => {
    // navigate("/baum-uds");
    scrollToTop();
  };

  return (
    <div className="baum-inform-create-container">
      <div className="baum-inform-create-content">
        <h3>Пришла пора создать собственную data fabric</h3>
      </div>
      <div className="baum-inform-create-content">
        <p className="info-text">
          BAUM INFORM делает доступными лучшие возможности облака, чтобы вы
          могли использовать свли данные в приложениях, которые управляют вашим
          бизнесом. Это называется созданием data fabric, и в этом процессе вы в
          хорошей компании.
        </p>
        <Button
          className="btn btn-outlined-light"
          endIcon={<ArrowRightAltIcon />}
        >
          Начать создание
        </Button>
      </div>
    </div>
  );
};

export default BaumInformCreate;
