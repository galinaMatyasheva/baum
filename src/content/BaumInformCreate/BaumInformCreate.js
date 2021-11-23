import React from "react";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";

import "./BaumInformCreate.scss";

const BaumInformCreate = () => {
  return (
 
      <div className="baum-inform-create-container">
        <div className="baum-inform-create-content">
          <h3>Пришла пора создать собственную data fabric</h3>
        </div>
        <div className="baum-inform-create-content">
          <p className="baum-inform-create-text">
            <span>Baum Inform </span>
            делает доступными лучшие возможности облака, чтобы вы могли
            использовать свли данные в прилодениях, которые управляют вашим
            бизнесом. Это называется созданием data fabric, и в этом процессе вы
            в хорошей компании.
          </p>
          <div className="baum-inform-create-link">
            <a href="">Начать создание</a>
            <ArrowRightAltIcon />
          </div>
        </div>
      </div>

  );
};

export default BaumInformCreate;
