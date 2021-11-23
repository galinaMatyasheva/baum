import React from "react";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Checkbox,
  FormGroup,
  FormControlLabel,
  TextField,
  TextareaAutosize,
} from "@material-ui/core";

import "./BaumUds.scss";
import BaumInformCreate from "../../../content/BaumInformCreate/BaumInformCreate";
import table from "../../../assets/table.png";

const BaumUds = () => {
  return (
    <section className="baum-uds-container">
      <div className="baum-uds-container-info">
        <div className="baum-uds-info">
          <div className="baum-uds-content">
            <h2>BAUM UDS (scale up)</h2>
            <p className="info-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <div className="baum-uds-link main-container-link">
              <a href="">Оставить заявку</a>
            </div>
          </div>
        </div>
        <div className="baum-uds-img baum-uds-info"></div>
      </div>

      <div className="baum-uds-container-info">
        <div className="baum-uds-pages-img baum-uds-info"></div>
        <div className="baum-uds-pages-info">
          <div className="baum-uds-pages-content">
            <div className="baum-uds-pages-links">
              <div className="baum-uds-pages-link">
                <Button endIcon={<ArrowRightAltIcon />}>Функционал</Button>
              </div>
              <div className="baum-uds-pages-link">
                <Button endIcon={<ArrowRightAltIcon />}>Модели</Button>
              </div>
            </div>
            <div className="baum-uds-pages-links">
              <div className="baum-uds-pages-link">
                <Button endIcon={<ArrowRightAltIcon />}>Документация</Button>
              </div>
              <div className="baum-uds-pages-link">
                <Button endIcon={<ArrowRightAltIcon />}>Поддержка</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BaumInformCreate />

      <div className="baum-uds-container-cards">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia component="img" height="300" image={table} alt="img" />
          <CardContent>
            <h3>BAUM на Эльбрусе</h3>
            <p>
              12 июня в День России нам удалось подняться на самую высокую
              вершину нашей страны - гору Эльбрус (5642 метра).
            </p>
          </CardContent>
          <CardActions>
            <Button size="large" endIcon={<ArrowRightAltIcon />}>
              Читать
            </Button>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia component="img" height="300" image={table} alt="img" />
          <CardContent>
            <h3>Система предиктивной аналитики для ТЭЦ</h3>
            <p>
              Наша команда разрабатывает систему предиктивной аналитики для
              предприятий ТЭЦ - определяющую фактическое состояние
            </p>
          </CardContent>
          <CardActions>
            <Button size="large" endIcon={<ArrowRightAltIcon />}>
              Читать
            </Button>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia component="img" height="300" image={table} alt="img" />
          <CardContent>
            <h3>BAUM на "Российской неделе Высоких технологий"</h3>
            <p>
              BAUM дставляет свои решения на "Российской Неделе Высоких
              Технологий" в ЦВК "Экспоцентр".
            </p>
          </CardContent>
          <CardActions>
            <Button size="large" endIcon={<ArrowRightAltIcon />}>
              Читать
            </Button>
          </CardActions>
        </Card>
      </div>

      <div className="application-form-container-info">
        <div className="application-form-img"></div>
        <div className="application-form-info">
          <form className="application-form-content">
            <h2>Оставьте заявку и мы с вами свяжемся!</h2>
            <div className="application-form-content-info">
              <div className="application-form-textfields">
                <div className="application-form-textfield">
                  <TextField
                    name="name"
                    placeholder="Ваше имя"
                    variant="outlined"
                    type="text"
                  />
                  <TextField
                    name="firm-name"
                    placeholder="Название организации"
                    variant="outlined"
                    type="text"
                  />
                </div>
                <div className="application-form-textfield">
                  <TextField
                    name="phone"
                    placeholder="Телефон"
                    variant="outlined"
                  />
                  <TextField
                    name="mail"
                    placeholder="E-mail"
                    variant="outlined"
                  />
                </div>
              </div>
              <div className="application-form-submit-info">
                <div className="application-form-checkbox">
                  <FormGroup>
                    <FormControlLabel
                      control={<Checkbox defaultChecked />}
                      label="Даю согласие на обработку персональных данных"
                    />
                  </FormGroup>
                </div>
                <Button type="submit" variant="outlined">
                  Отправить
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default BaumUds;
