import React, { useState } from "react";
import { Slider, IconButton } from "@material-ui/core";
import WestIcon from "@mui/icons-material/West";
import EastIcon from "@mui/icons-material/East";

import ceo from "../../assets/team/ceo.png";
import cto from "../../assets/team/cto.png";
import cso from "../../assets/team/cso.png";
import cao from "../../assets/team/cao.png";
import clo from "../../assets/team/clo.png";
import "./TeamInfo.scss";

const TeamInfo = () => {
  const [index, setIndex] = useState(0);
  const [indexPhone, setIndexPhone] = useState(0);
  const [value, setValue] = useState(25);
  const [valuePhone, setValuePhone] = useState(5);

  const picList = [ceo, cto, clo, cao, cso];
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
      name: "Маргарита Стоянова",
      position: "CLO (Chief Learning Officer)",
    },
    {
      name: "Александр Сапожников",
      position: "CAO (Chief Administrative Officer)",
    },

    {
      name: "Павел Гундин",
      position: "CSO (Chief Sales Officer)",
    },
  ];

  const updateValue = (e, newValue) => {
    setValue(newValue);
  };

  const updateValuePhone = (e, newValue) => {
    setValuePhone(newValue);
  };

  const onClickNext = () => {
    if (index + 4 === picList.length) {
      setIndex(0);
      setValue(25);
    } else {
      setIndex(index + 1);
      setValue(value + 65);
    }
  };

  const onClickPrevious = () => {
    if (index - 1 < 0) {
      setIndex(picList.length - 4);
      setValue(25);
    } else {
      setIndex(index - 1);
      setValue(value - 65);
    }
  };

  const onClickNextPhone = () => {
    if (indexPhone + 1 === picList.length) {
      setIndexPhone(0);
      setValuePhone(5);
    } else {
      setIndexPhone(indexPhone + 1);
      setValuePhone(valuePhone + 5);
    }
  };

  const onClickPreviousPhone = () => {
    if (indexPhone - 1 < 0) {
      setIndexPhone(picList.length - 1);
      setValuePhone(25);
    } else {
      setIndexPhone(indexPhone - 1);
      setValuePhone(valuePhone - 5);
    }
  };
  console.log("index", index);
  return (
    <div className="team-container-info">
      <div className="team-info-content">
        <div className="team-content">
          <h3>Наша команда</h3>
          <p className="info-text">
            Мы вендор программных и программно-аппаратных комплексов. Мы создаем
            продукты, которые помогают развивать и увеличивать эффективность
            всех отраслей экономики России.
          </p>
        </div>
      </div>
      <div className="team-img team-info">
        <div className="carousel-content">
          <div className="carousel-gallery">
            <img src={picList[index]} alt="img" />
            <h4>{titleList[index].name}</h4>
            <p>{titleList[index].position}</p>
          </div>
          <div className="carousel-gallery">
            <img src={picList[index + 1]} alt="img" />
            <h4>{titleList[index + 1].name}</h4>
            <p>{titleList[index + 1].position}</p>
          </div>
          <div className="carousel-gallery">
            <img src={picList[index + 2]} alt="img" />
            <h4>{titleList[index + 2].name}</h4>
            <p>{titleList[index + 2].position}</p>
          </div>
          <div className="carousel-gallery">
            <img src={picList[index + 3]} alt="img" />
            <h4>{titleList[index + 3].name}</h4>
            <p>{titleList[index + 3].position}</p>
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
            <img src={picList[indexPhone]} alt="img" />
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
            max={25}
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
    </div>
  );
};
export default TeamInfo;
