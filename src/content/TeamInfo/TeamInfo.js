import React, { useState } from "react";
import { Slider, IconButton } from "@material-ui/core";
import WestIcon from "@mui/icons-material/West";
import EastIcon from "@mui/icons-material/East";

import ceo from "../../assets/team/ceo.png";
import cto from "../../assets/team/cto.png";
import cso from "../../assets/team/cso.png";
import cao from "../../assets/team/cao.png";
import clo from "../../assets/team/clo.png";
import cspo from "../../assets/team/cspo.png";
import "./TeamInfo.scss";

const TeamInfo = () => {
  const [index, setIndex] = useState(0);
  const [indexPhone, setIndexPhone] = useState(0);
  const [value, setValue] = useState(30);
  const [valuePhone, setValuePhone] = useState(6);

  const picList = [ceo, cto, cso, cao, clo, cspo];
  const titleList = [
    {
      name: "Алексей Бородулин",
      position: "CEO (Chief Executive Officer)",
    },
    {
      name: "Андрей Гантимуров",
      position: "CTO (Chief Technology Officer)",
    },
    {
      name: "Павел Гундин",
      position: "CSO (Chief Sales Officer)",
    },
    {
      name: "Александр Сапожников",
      position: "CAO (Chief Administrative Officer)",
    },
    {
      name: "Маргарита Стоянова",
      position: "CLO (Chief Learning Officer)",
    },
    {
      name: "Руслан Чиняков",
      position: "CSPO (Chief Strategic Planning Officer)",
    },
  ];

  const updateValue = (e, newValue) => {
    setValue(newValue);
  };

  const updateValuePhone = (e, newValue) => {
    setValuePhone(newValue);
  };

  const onClickNext = () => {
    if (index + 2 === picList.length) {
      setIndex(0);
      setValue(30);
    } else {
      setIndex(index + 2);
      setValue(value + 30);
    }
  };

  const onClickPrevious = () => {
    if (index - 2 < 0) {
      setIndex(picList.length - 2);
      setValue(90);
    } else {
      setIndex(index - 2);
      setValue(value - 30);
    }
  };

  const onClickNextPhone = () => {
    if (indexPhone + 1 === picList.length) {
      setIndexPhone(0);
      setValuePhone(6);
    } else {
      setIndexPhone(indexPhone + 1);
      setValuePhone(valuePhone + 6);
    }
  };

  const onClickPreviousPhone = () => {
    if (indexPhone - 1 < 0) {
      setIndexPhone(picList.length - 1);
      setValuePhone(36);
    } else {
      setIndexPhone(indexPhone - 1);
      setValuePhone(valuePhone - 6);
    }
  };
  return (
    <div className="team-container-info">
      <div className="team-img team-info">
        <div className="carousel-content">
          <div className="carousel-gallery">
            <img src={picList[index]} />
            <h4>{titleList[index].name}</h4>
            <p>{titleList[index].position}</p>
          </div>
          <div className="carousel-gallery">
            <img src={picList[index + 1]} />
            <h4>{titleList[index + 1].name}</h4>
            <p>{titleList[index + 1].position}</p>
          </div>
        </div>
        <div className="gallery-slider ">
          <IconButton style={{ fontSize: "18px" }} onClick={onClickPrevious}>
            <WestIcon />
          </IconButton>
          <Slider
            value={value}
            step={1}
            min={0}
            max={90}
            onChange={updateValue}
          />
          <IconButton
            style={{ "margin-left": "5px", fontSize: "18px" }}
            onClick={onClickNext}
          >
            <EastIcon />
          </IconButton>
        </div>
      </div>
      <div className="team-img team-info-phone">
        <div className="carousel-content">
          <div className="carousel-gallery">
            <img src={picList[indexPhone]} />
            <h4>{titleList[indexPhone].name}</h4>
            <p>{titleList[indexPhone].position}</p>
          </div>
        </div>
        <div className="gallery-slider ">
          <IconButton
            style={{ fontSize: "18px" }}
            onClick={onClickPreviousPhone}
          >
            <WestIcon />
          </IconButton>
          <Slider
            value={valuePhone}
            step={1}
            min={0}
            max={36}
            onChange={updateValuePhone}
          />
          <IconButton
            style={{ "margin-left": "5px", fontSize: "18px" }}
            onClick={onClickNextPhone}
          >
            <EastIcon />
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
