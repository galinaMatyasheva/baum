import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from "react-responsive-carousel";

import ceo from "../../assets/team/ceo.png";
import cto from "../../assets/team/cto.png";
import cso from "../../assets/team/cso.png";
import cao from "../../assets/team/cao.png";
import clo from "../../assets/team/clo.png";
import cspo from "../../assets/team/cspo.png";
import "./TeamInfo.scss";

const TeamInfo = () => {
  return (
    <div className="team-container-info">
      <div className="team-img team-info">
        <Carousel>
          <div className="team-gallery">
            <div className="team-gallery-items">
              <img src={ceo} alt="img" />
              <h4>Алексей Бородулин</h4>
              <p>CEO (Chief Executive Officer)</p>
            </div>
            <div className="team-gallery-items">
              <img src={cto} alt="img" />
              <h4>Андрей Гантимуров</h4>
              <p>CTO (Chief Technology Officer)</p>
            </div>
          </div>
          <div className="team-gallery">
            <div className="team-gallery-items">
              <img src={cso} alt="img" />
              <h4>Павел Гундин</h4>
              <p>CSO (Chief Sales Officer)</p>
            </div>
            <div className="team-gallery-items">
              <img src={cao} alt="img" />
              <h4>Александр Сапожников</h4>
              <p>CAO (Chief Administrative Officer)</p>
            </div>
          </div>
          <div className="team-gallery">
            <div className="team-gallery-items">
              <img src={clo} alt="img" />
              <h4>Маргарита Стоянова</h4>
              <p>CLO (Chief Learning Officer)</p>
            </div>
            <div className="team-gallery-items">
              <img src={cspo} alt="img" />
              <h4>Руслан Чиняков</h4>
              <p>CSPO (Chief Strategic Planning Officer)</p>
            </div>
          </div>
        </Carousel>
      </div>
      <div className="team-info">
        <div className="team-content">
          <h2>Наша команда</h2>
          <p className="info-text">
            Наша команда – это команда энергичных и целеустремленных
            профессионалов, использующих творческий подход и обладающих
            нестандартным мышлением, обширными практическими знаниями и
            результативным опытом работы в различных отраслях.
          </p>
        </div>
      </div>
    </div>
  );
};
export default TeamInfo;
