import React from "react";
import Form from "../../content/Form/Form";
import MapAdress from "../../content/Map/MapAdress";
import DescriptionIcon from "@material-ui/icons/Description";

import Team from "../../content/TeamInfo/TeamInfo";
import "./AboutUs.scss";

const AboutUs = () => {
  return (
    <section className="about-us-container">
      <div className="about-us-container-info">
        <div className="about-us-info">
          <div className="about-us-content">
            <h1>О нас</h1>
            <p className="info-text">
              <span>BAUM Inform</span> – центр компетенций по разработке,
              производству и продвижению российских продуктов и услуг в сфере
              IT-технологий: система хранения данных (СХД), аналитика Big DATA,
              готовые модули Internet of things, цифровая безопасность,
              искусственный интеллект.
            </p>
          </div>
        </div>
        <div className="about-us-img about-us-info"></div>
      </div>

      <div className="about-us-goal-container-info">
        <div className="about-us-goal-img about-us-goal-info"></div>
        <div className="about-us-goal-content about-us-goal-info">
          <div className="about-us-goal-text">
            <h2>Цель:</h2>
            <div className="info-text">
              <span>
                Аккумулирование компетенций с целью формирования экспертного
                пула для решения различных задач в сфере IT-технологий:
              </span>
              <ul>
                <li>
                  Разработка новейших технологий и продуктов IT, способных
                  конкурировать с иностранными аналогами.
                </li>
                <li>
                  Стимулирование роста экономического спроса на инновации –
                  решение проблемы «утечки мозгов».
                </li>
                <li>Поиск новых компетентных сотрудников.</li>
                <li>
                  Трансформация общественного сознания (не только среди
                  специалистов) о важности внедрения IT-технологий в
                  повседневную и профессиональную жизнь.
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
    </section>
  );
};

export default AboutUs;
