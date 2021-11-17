import React, { useState } from "react";
import {
  YMaps,
  Map,
  Placemark,
  ZoomControl,
  GeolocationControl,
} from "react-yandex-maps";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import {
  Slider,
  IconButton,
  Checkbox,
  Button,
  FormGroup,
  FormControlLabel,
  TextField,
  TextareaAutosize,
} from "@material-ui/core";

import logo from "../../assets/logo.svg";
import ceo from "../../assets/ceo.png";
import cto from "../../assets/cto.png";
import "./Main.scss";

const Main = () => {
  const [value, setValue] = useState(30);

  const updateValue = (e, newValue) => {
    setValue(newValue);
  };
  
  return (
    <div className="main-container">
      <div className="main-container-info">
        <div className="main-feedback-content feedback-info">
          <div>
            <div className="content-img">
              <img src={logo} alt="logo" />
            </div>
            <p>Надёжное хранение данных</p>
            <button>Обратная связь</button>
          </div>
        </div>
        <div className="main-feedback-img feedback-info"></div>
      </div>

      <div className="main-info-about">
        <div className="main-info info-about-left">
          <h3>Пришла пора создать собственную data fabric</h3>
        </div>
        <div className="main-info info-about-right">
          <p className="info-text">
            <span>Baum Inform </span>
            делает доступными лучшие возможности облака, чтобы вы могли
            использовать свли данные в прилодениях, которые управляют вашим
            бизнесом. Это называется созданием data fabric, и в этом процессе вы
            в хорошей компании.
          </p>
          <div className="main-info-link main-container-link">
            <a href="">Начать создание</a>
            <ArrowRightAltIcon />
          </div>
        </div>
      </div>

      <div className="shd-container-info">
        <div className="main-shd-content shd-info">
          <div className="shd-content">
            <h2>СХД</h2>
            <p className="info-text">
              СХД BAUM представляет собой высокопроизводительные, защищенные
              системы хранения данных большой ёмкости, обеспечивающие высокий
              уровень производительности, гибкости, масштабируемости,
              отказоустойчивости и преимуществ решения в целом для поддержки
              самых требовательных средств хранения данных.
            </p>
            <div className="shd-links">
              <div className="main-container-link shd-link">
                <a href="">BAUM UDS (scale up)</a>
                <ArrowRightAltIcon />
              </div>
              <div className="main-container-link shd-link">
                <a href="">BAUM SWARM (scale out)</a>
                <ArrowRightAltIcon />
              </div>
            </div>
          </div>
        </div>
        <div className="main-shd-img shd-info"></div>
      </div>

      <div className="store-info-about">
        <div className="main-info info-about-left">
          <h3>Больше вариантов хранения, больше вариантов оплаты</h3>
          <p className="info-text">
            Выберите AUM SWARM и размещайте данные именно там.ю где они вам
            нужны: в собственном ЦОД, в обычном или гиблидном облаке. Теперь
            доступно по подписке с оплатой по мере использования ресурсов.
          </p>
          <div className="main-info-link main-container-link">
            <a href="">Узнать подробнее</a>
            <ArrowRightAltIcon />
          </div>
        </div>
        <div className="main-info info-about-right"></div>
      </div>

      <div className="ai-container-info">
        <div className="main-ai-img ai-info"></div>
        <div className="main-ai-content ai-info">
          <div className="ai-content">
            <h2>Платформа прикладного ИИ</h2>
            <p className="info-text">
              Мы делаем программно-технический комплекс прикладного интеллекта
              BAUM AI, помогающий заказчикам из госсектора и среднего и крупного
              традиционного бизнеса быстро получать эффект от внедрения
              продвинутой аналитики на базе ИИ, используя сочетание
              оптимизированной аппаратной платформы с ориентированным на
              предметного пользователя, а также уникального софта собственной
              разработки, который позволяет создавать, обучать или использовать
              предобученные модели искусственного интеллекта без необходимости
              прямого кодирования по принципу drag-and-drop.
            </p>
            <div className="main-container-link ai-link">
              <a href="">Читать</a>
              <ArrowRightAltIcon />
            </div>
          </div>
        </div>
      </div>

      <div className="community-container-info">
        <div className="main-community-content community-info">
          <div className="community-content">
            <h2>Community</h2>
            <p className="info-text">
              Наша IT - команда строит модели, выбирает самые современные
              технологии, пишет код, оптимизирует его для различного железа,
              отлаживает, тестирует у заказчиков, вносит коррективы. Мы будем
              рады обсудить ваши пожелания и идеи.
            </p>
            <div className="community-links">
              <div className="main-container-link community-link">
                <a href="">Читать</a>
                <ArrowRightAltIcon />
              </div>
              <div className="main-container-link community-link">
                <a href="">Анкета</a>
                <ArrowRightAltIcon />
              </div>
            </div>
          </div>
        </div>
        <div className="main-community-img community-info"></div>
      </div>

      <div className="team-container-info">
        <div className="main-team-img team-info">
          <div className="team-gallery">
            <div className="team-gallery-items">
              <img src={ceo} alt="photo" />
              <h4>Алексей Бородулин</h4>
              <p>CEO (Chief Executive Officer)</p>
            </div>
            <div className="team-gallery-items">
              <img src={cto} alt="photo" />
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
              отлаживает, тестирует у заказчиков, вносит коррективы. Мы будем
              рады обсудить ваши пожелания и идеи.
            </p>
          </div>
        </div>
      </div>

      <div className="address-container-info">
        <div className="main-address-content address-info">
          <div className="address-content">
            <h2>Мы расположены по адресам:</h2>
            <div className="address-links">
              <div className="main-container-link address-link">
                <a href="">Лаборатория</a>
              </div>
              <div className="main-container-link address-link">
                <a href="">Офис</a>
              </div>
            </div>
            <h5>Адрес лаборатории</h5>
            <p>г.Москва, Лефортовская наб., 1 Корпус</p>
            <p> Энергомашиностроения МГТУ им. Н.Э.Баумана</p>
          </div>
        </div>
        <div className="main-address-img address-info">
          <YMaps className="main-address-img address-info">
            <Map
              width="100%"
              height="100%"
              defaultState={{
                center: [55.7688, 37.689734],
                zoom: 16,
                controls: [],
              }}
            >
              <Placemark geometry={[55.7688, 37.689734]} />
              <ZoomControl
                options={{
                  float: "right",
                  position: {
                    top: "108px",
                    right: "10px",
                    bottom: "auto",
                    left: "auto",
                  },
                }}
              />
              <GeolocationControl options={{ float: "right" }} />
            </Map>
          </YMaps>
        </div>
      </div>

      <div className="form-container-info">
        <div className="main-form-img form-info"></div>
        <div className="main-form-content form-info">
          <form className="form-content">
            <h2>Остались вопросы? Свяжитесь с нами!</h2>
            <div className="form-textfields">
              <div className="textfield">
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
              <div className="textfield">
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
              <TextareaAutosize
                name="message"
                minRows={1.5}
                placeholder="Текст сообщения"
                style={{ width: "100%" }}
              />
            </div>
            <div className="form-submit-info">
              <div className="form-checkbox">
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
          </form>
        </div>
      </div>
    </div>
  );
};

export default Main;
