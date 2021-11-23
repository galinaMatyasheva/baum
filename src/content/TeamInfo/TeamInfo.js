import React, { useState } from "react";
import { Slider, IconButton } from "@material-ui/core";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";

import ceo from "../../assets/ceo.png";
import cto from "../../assets/cto.png";
import "./TeamInfo.scss";

const TeamInfo = () => {
  const [value, setValue] = useState(30);

  const updateValue = (e, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="team-container-info">
      <div className="team-img team-info">
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
        <div className="gallery-slider">
          <IconButton
            className="arrow-left"
            variant="contained"
            onClick={() => {
              setValue(value - 30);
            }}
          >
            <ArrowRightAltIcon />
          </IconButton>{" "}
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
