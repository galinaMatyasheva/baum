import React from "react";
import DescriptionIcon from "@material-ui/icons/Description";

import Team from "../../content/TeamInfo/TeamInfo";
import Form from "../../content/Form/Form";
import MapAdress from "../../content/Map/MapAdress";
import "./AboutUs.scss";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const AboutUs = () => {
  return (
    <section className="about-us-container">
      <Header />
      <div className="about-us-container-info">
        <div className="about-us-info">
          <div>
            <h1 className="title title-dark">О нас</h1>
            <div className="about-us-content">
              <p className="info-text">
                BAUM Inform – центр компетенций по разработке, производству и
                продвижению собственных продуктов и услуг в сфере IT-технологий:
                система хранения данных (СХД), аналитика Big DATA, готовые
                модули Internet of things, цифровая безопасность, искусственный
                интеллект.
              </p>
            </div>
          </div>
        </div>
        <div className="about-us-img about-us-info"></div>
      </div>

      <div className="about-us-goal-container-info">
        <div className="about-us-goal-img about-us-goal-info"></div>
        <div className="about-us-goal-content about-us-goal-info">
          <div className="about-us-goal-text">
            <div className="info-text">
              <span>Миссия:</span>
              <ul>
                <li>
                  Обеспечиваем доступность и надежность хранения данных, а также
                  способствуем извлечению информации из данных. 
                </li>
                <li>
                  Мы развиваем и увеличиваем эффективность всех отраслей
                  экономики России с помощью своих продуктов.
                </li>
              </ul>
              <span>Ценности:</span>
              <ul>
                <li>Инновационность</li>
                <li>Ответственность</li>
                <li>Качество продуктов и услуг</li>
                <li>Командность</li>
              </ul>
              <span>Что мы делаем</span>
              <ul>
                <li>
                  Разрабатываем СХД международного уровня по производительности,
                  надежности и хранению
                </li>
                <li>
                  Разрабатываем удобную и полезную платформу прикладного AI для
                  отраслевого аналитика
                </li>
                <li>
                  Разрабатываем прикладные программы обучения для отраслевых
                  аналитиков.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="statistics-container-info">
        <div className="statistics-content statistics-info">
          <div className="statistics-column">
            <div className="statistics-block-info">
              <p className="statistics-digitals">2</p>
              <p>
                центра исследований
                <br /> и разработок
              </p>
            </div>
            <div className="statistics-block-info">
              <p className="statistics-digitals">17</p>
              <p>партнеров</p>
            </div>
            <div className="statistics-block-info">
              <p className="statistics-digitals">250</p>
              <p>
                партнёрских
                <br /> сервисных центров
              </p>
            </div>
            <div className="statistics-block-info">
              <p className="statistics-digitals">50</p>
              <p>и более установок</p>
            </div>
          </div>
          <div className="statistics-column">
            <div className="statistics-block-info">
              <DescriptionIcon />
              <p>
                ISO 9001
                <br /> ГОСТ РВ
              </p>
            </div>
            <div className="statistics-block-info">
              <DescriptionIcon />
              <p>
                Сертификация
                <br />
                (МО-НДВ2)
              </p>
            </div>
            <div className="statistics-block-info">
              <DescriptionIcon />
              <p>
                Алгоритм шифрования
                <br />
                ГОСТ 28147-89
              </p>
            </div>
            <div className="statistics-block-info">
              <DescriptionIcon />
              <p>
                Включено в реестр
                <br />
                ответственного ПО
              </p>
            </div>
          </div>
        </div>
      </div>
      <Team />
      <MapAdress />
      <Form />
      <Footer />
    </section>
  );
};

export default AboutUs;
