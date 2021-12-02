import React, { useState } from "react";
import { Slider, IconButton } from "@material-ui/core";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import Carousel from "react-material-ui-carousel";

import ceo from "../../assets/team/ceo.png";
import cto from "../../assets/team/cto.png";
import cso from "../../assets/team/cso.png";
import cao from "../../assets/team/cao.png";
import clo from "../../assets/team/clo.png";
import cspo from "../../assets/team/cspo.png";
import "./TeamInfo.scss";

const TeamInfo = () => {
  const [value, setValue] = useState(30);

  const updateValue = (e, newValue) => {
    setValue(newValue);
  };

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
        <div className="gallery-slider ">
          <IconButton
            className="arrow-left "
            variant="contained"
            onClick={() => {
              setValue(value - 30);
            }}
          >
            <ArrowRightAltIcon />
          </IconButton>
          <Slider
            value={value}
            step={1}
            min={0}
            max={90}
            onChange={updateValue}
          />
          <IconButton
            variant="contained"
            onClick={() => {
              setValue(value + 30);
            }}
          >
            <ArrowRightAltIcon />
          </IconButton>
        </div>
      </div>
      <div className="team-info">
        <div className="team-content">
          <h2>Наша команда</h2>
          <p className="info-text">
            Наша IT - команда строит модели, выбирает самые современные
            технологии, пишет код, оптимизирует его для различного железа,
            отлаживает, тестирует у заказчиков, вносит коррективы. Мы будем рады
            обсудить ваши пожелания и идеи.
          </p>
        </div>
      </div>
    </div>
  );
};
export default TeamInfo;
