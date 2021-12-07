import React, { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@material-ui/core";

import "./FunctionalPlatform.scss";
import arrowBottomImg from "../../../../assets/arrow-bottom.svg";
import arrowBottomBlackImg from "../../../../assets/arrow-bottom-black.svg";
import Header from "../../../Header/Header";
import Footer from "../../../Footer/Footer";
import NavbarSwarm from "../Navbar/Navbar";

const FunctionalPlatform = () => {
  const [isButtonHoveredLeft, setIsButtonHoveredLeft] = useState({
    isButtonHoveredLeft: [
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
    ],
  });

  const [isButtonHoveredRight, setIsButtonHoveredRight] = useState({
    isButtonHoveredRight: [
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
    ],
  });

  const changedArrowLeft = (hoverIndex) => {
    isButtonHoveredLeft.isButtonHoveredLeft = [
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
    ];
    isButtonHoveredLeft.isButtonHoveredLeft[hoverIndex] = true;
    setIsButtonHoveredLeft({ ...isButtonHoveredLeft });
  };

  const changedArrowLeaveLeft = () => {
    isButtonHoveredLeft.isButtonHoveredLeft = [
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
    ];
    setIsButtonHoveredLeft({ ...isButtonHoveredLeft });
  };

  const changedArrowRight = (hoverIndex) => {
    isButtonHoveredRight.isButtonHoveredRight = [
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
    ];
    isButtonHoveredRight.isButtonHoveredRight[hoverIndex] = true;
    setIsButtonHoveredRight({ ...isButtonHoveredRight });
  };

  const changedArrowLeaveRight = () => {
    isButtonHoveredRight.isButtonHoveredRight = [
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
    ];
    setIsButtonHoveredRight({ ...isButtonHoveredRight });
  };

  return (
    <div className="functional-container">
      <Header />
      <NavbarSwarm />
      <div className="functional-container-info">
        <h1 className="title-baum title-orange">Функционал</h1>
        <div className="functional-img"></div>
      </div>

      <div className="accordion-container">
        <div className="accordion-info">
          <Accordion>
            <AccordionSummary
              onMouseEnter={() => changedArrowLeft(0)}
              onMouseLeave={() => changedArrowLeaveLeft()}
              expandIcon={
                !isButtonHoveredLeft.isButtonHoveredLeft[0] ? (
                  <img src={arrowBottomImg} alt="img" />
                ) : (
                  <img src={arrowBottomBlackImg} alt="img" />
                )
              }
            >
              <h4>Классификация звуков. Определение объекта по звуку</h4>
            </AccordionSummary>
            <AccordionDetails>
              <div>
                <p className="accordion-text">
                  Распознавание объектов и мест по звуку. Определение объектов
                  на зашумленных изображениях с помощью звука
                </p>
              </div>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              onMouseEnter={() => changedArrowLeft(1)}
              onMouseLeave={() => changedArrowLeaveLeft()}
              expandIcon={
                !isButtonHoveredLeft.isButtonHoveredLeft[1] ? (
                  <img src={arrowBottomImg} alt="img" />
                ) : (
                  <img src={arrowBottomBlackImg} alt="img" />
                )
              }
            >
              <h4>Классификация изображения</h4>
            </AccordionSummary>
            <AccordionDetails>
              <p className="accordion-text">
                Распознавание и классификация лиц на дореволюционных фото. Поиск
                лиц царской семьи на дореволюционных фото. Точность
                классификатора 85-90%.
              </p>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              onMouseEnter={() => changedArrowLeft(2)}
              onMouseLeave={() => changedArrowLeaveLeft()}
              expandIcon={
                !isButtonHoveredLeft.isButtonHoveredLeft[2] ? (
                  <img src={arrowBottomImg} alt="img" />
                ) : (
                  <img src={arrowBottomBlackImg} alt="img" />
                )
              }
            >
              <h4>Промышленность</h4>
            </AccordionSummary>
            <AccordionDetails>
              <p className="accordion-text">
                Раннее распознование микродефектов на металлических
                поверхностях, с помощью нейронных сетей. Точность классификатора
                более 90%.
              </p>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              onMouseEnter={() => changedArrowLeft(3)}
              onMouseLeave={() => changedArrowLeaveLeft()}
              expandIcon={
                !isButtonHoveredLeft.isButtonHoveredLeft[3] ? (
                  <img src={arrowBottomImg} alt="img" />
                ) : (
                  <img src={arrowBottomBlackImg} alt="img" />
                )
              }
            >
              <h4>Распознавание рукописного текста</h4>
            </AccordionSummary>
            <AccordionDetails>
              <p className="accordion-text">
                Распознавание рукописного текста и почерка. Определение
                авторства. Определение тональности(негативный, нейтральный,
                позитивный) текста и эмоционального состояния в момент
                написания.
              </p>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              onMouseEnter={() => changedArrowLeft(4)}
              onMouseLeave={() => changedArrowLeaveLeft()}
              expandIcon={
                !isButtonHoveredLeft.isButtonHoveredLeft[4] ? (
                  <img src={arrowBottomImg} alt="img" />
                ) : (
                  <img src={arrowBottomBlackImg} alt="img" />
                )
              }
            >
              <h4>Интеллектуальная обработка новостного фона</h4>
            </AccordionSummary>
            <AccordionDetails>
              <p className="accordion-text">
                Определение тональности новостного фона. Поиск сущностей и их
                связей. Сфера применения - мониторинг национальных проектов,
                предсказание котировок.
              </p>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              onMouseEnter={() => changedArrowLeft(5)}
              onMouseLeave={() => changedArrowLeaveLeft()}
              expandIcon={
                !isButtonHoveredLeft.isButtonHoveredLeft[5] ? (
                  <img src={arrowBottomImg} alt="img" />
                ) : (
                  <img src={arrowBottomBlackImg} alt="img" />
                )
              }
            >
              <h4>Чат-бот. Генерация текста</h4>
            </AccordionSummary>
            <AccordionDetails>
              <p className="accordion-text">
                Общение с системой на естественном языке, с возможностью
                задавать вопросы и получать ответы. Создание гибридных
                интеллектуальных диалоговых систем. Используется state of the
                art модели seq2seq для генерации текста. В отличии от жестких
                правил используются скроытые пространства и меры схожести слов.
                На сегодняшний день модель обучена на существующем датасете
                вопрос-ответов, способна генерировать уникальный текст. Есть
                первые признаки связной речи на естественном языке.
              </p>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              onMouseEnter={() => changedArrowLeft(6)}
              onMouseLeave={() => changedArrowLeaveLeft()}
              expandIcon={
                !isButtonHoveredLeft.isButtonHoveredLeft[6] ? (
                  <img src={arrowBottomImg} alt="img" />
                ) : (
                  <img src={arrowBottomBlackImg} alt="img" />
                )
              }
            >
              <h4>Предактивная аналитика показателей систем СХД</h4>
            </AccordionSummary>
            <AccordionDetails>
              <p className="accordion-text">
                Предективно-статистический анализ временных рядов. Раннее
                предсказание показателей нагрузки на центральный процессор,
                чтение дисков/задержки записи.
              </p>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              onMouseEnter={() => changedArrowLeft(7)}
              onMouseLeave={() => changedArrowLeaveLeft()}
              expandIcon={
                !isButtonHoveredLeft.isButtonHoveredLeft[7] ? (
                  <img src={arrowBottomImg} alt="img" />
                ) : (
                  <img src={arrowBottomBlackImg} alt="img" />
                )
              }
            >
              <h4>AI мониторинг и предиктивная аналитика для ТЭЦ</h4>
            </AccordionSummary>
            <AccordionDetails>
              <p className="accordion-text">
                Считывание фактических показателей оборудования и комплексный
                мониторинг состояния системы в реальном времени.
                Интеллектуальная система принятия решений на основе глубокой
                аналитики и машинного обучения. Ожидаемый срок окупаемости от 3
                до 7 лет в зависимости от типа системы и специфики деятельности.
              </p>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              onMouseEnter={() => changedArrowLeft(8)}
              onMouseLeave={() => changedArrowLeaveLeft()}
              expandIcon={
                !isButtonHoveredLeft.isButtonHoveredLeft[8] ? (
                  <img src={arrowBottomImg} alt="img" />
                ) : (
                  <img src={arrowBottomBlackImg} alt="img" />
                )
              }
            >
              <h4>Предсказание лесных пожаров</h4>
            </AccordionSummary>
            <AccordionDetails>
              <p className="accordion-text">
                Предсказание вероятности возникновения лесных пожаров, их
                координаты и площадь, используя исторические погодные данные, а
                также косвенные признаки (наличие инфраструктурных объектов,
                близость к транспортным сетям, социальнодемографические
                характеристики ближайших населенных пунктов).
              </p>
            </AccordionDetails>
          </Accordion>
        </div>
        <div className="accordion-info">
          <Accordion>
            <AccordionSummary
              onMouseEnter={() => changedArrowRight(0)}
              onMouseLeave={() => changedArrowLeaveRight()}
              expandIcon={
                !isButtonHoveredRight.isButtonHoveredRight[0] ? (
                  <img src={arrowBottomImg} alt="img" />
                ) : (
                  <img src={arrowBottomBlackImg} alt="img" />
                )
              }
            >
              <h4>Обработка звука. Классификация музыкальных аудиофайлов</h4>
            </AccordionSummary>
            <AccordionDetails>
              <div>
                <p className="accordion-text">
                  Обработка базы данных аудио файлов и их классификация.
                  Создание библиотеки с аудиофайлами разных жанров.
                </p>
              </div>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              onMouseEnter={() => changedArrowRight(1)}
              onMouseLeave={() => changedArrowLeaveRight()}
              expandIcon={
                !isButtonHoveredRight.isButtonHoveredRight[1] ? (
                  <img src={arrowBottomImg} alt="img" />
                ) : (
                  <img src={arrowBottomBlackImg} alt="img" />
                )
              }
            >
              <h4>Диагностика заболеваний в медицине</h4>
            </AccordionSummary>
            <AccordionDetails>
              <p className="accordion-text">
                Создание нейронной сети для автоматической диагностики родинок
                на злокачественность. Пациент имеет возможность отправить фото
                своей родинки и получить оценку онлайн. Точность модели
                нейронной сети до 93,21%.
              </p>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              onMouseEnter={() => changedArrowRight(2)}
              onMouseLeave={() => changedArrowLeaveRight()}
              expandIcon={
                !isButtonHoveredRight.isButtonHoveredRight[2] ? (
                  <img src={arrowBottomImg} alt="img" />
                ) : (
                  <img src={arrowBottomBlackImg} alt="img" />
                )
              }
            >
              <h4>Снижение количества ошибок на производстве</h4>
            </AccordionSummary>
            <AccordionDetails>
              <p className="accordion-text">
                Анализ входящего видеопотока через API. При фиксировании дефекта
                изделия отправка уведомления инженеру.
              </p>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              onMouseEnter={() => changedArrowRight(3)}
              onMouseLeave={() => changedArrowLeaveRight()}
              expandIcon={
                !isButtonHoveredRight.isButtonHoveredRight[3] ? (
                  <img src={arrowBottomImg} alt="img" />
                ) : (
                  <img src={arrowBottomBlackImg} alt="img" />
                )
              }
            >
              <h4>Классификация текстов</h4>
            </AccordionSummary>
            <AccordionDetails>
              <p className="accordion-text">
                Определение автора по тексту с помощью рекуррентных сетей и
                одновременной свертки. Высокая точность распознавания текста
              </p>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              onMouseEnter={() => changedArrowRight(4)}
              onMouseLeave={() => changedArrowLeaveRight()}
              expandIcon={
                !isButtonHoveredRight.isButtonHoveredRight[4] ? (
                  <img src={arrowBottomImg} alt="img" />
                ) : (
                  <img src={arrowBottomBlackImg} alt="img" />
                )
              }
            >
              <h4>Рекомендательная система</h4>
            </AccordionSummary>
            <AccordionDetails>
              <p className="accordion-text">
                Разработка комплексной системы поддержки принятия решений на
                основе потока больших данных(текст, звук, изображения).
              </p>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              onMouseEnter={() => changedArrowRight(5)}
              onMouseLeave={() => changedArrowLeaveRight()}
              expandIcon={
                !isButtonHoveredRight.isButtonHoveredRight[5] ? (
                  <img src={arrowBottomImg} alt="img" />
                ) : (
                  <img src={arrowBottomBlackImg} alt="img" />
                )
              }
            >
              <h4>Гибридная интеллектуальная база знаний</h4>
            </AccordionSummary>
            <AccordionDetails>
              <p className="accordion-text">
                Текущая и стратегическая аналитика, оценка НИОКР, анализ
                чертежей и истории документооборота. База знаний с
                использованием технологий искусственного интеллекта. Хранилище
                структурированных и неструктурированных данных Гибкая настройка
                алгроитмов ИИ под нужды конкретного специалиста - от технолога и
                инженера до топ-менеджера и главного конструктора.
              </p>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              onMouseEnter={() => changedArrowRight(6)}
              onMouseLeave={() => changedArrowLeaveRight()}
              expandIcon={
                !isButtonHoveredRight.isButtonHoveredRight[6] ? (
                  <img src={arrowBottomImg} alt="img" />
                ) : (
                  <img src={arrowBottomBlackImg} alt="img" />
                )
              }
            >
              <h4>Оптимизация ресурсов на складе</h4>
            </AccordionSummary>
            <AccordionDetails>
              <p className="accordion-text">
                По историческим данным определить ожидаемое движение по
                складу(приход товара и отгрузка). Спрогнозировать возможную
                пиковую нагрузку в течение месяца.
              </p>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              onMouseEnter={() => changedArrowRight(7)}
              onMouseLeave={() => changedArrowLeaveRight()}
              expandIcon={
                !isButtonHoveredRight.isButtonHoveredRight[7] ? (
                  <img src={arrowBottomImg} alt="img" />
                ) : (
                  <img src={arrowBottomBlackImg} alt="img" />
                )
              }
            >
              <h4>AI анализ сердечно-сосудистых заболеваний</h4>
            </AccordionSummary>
            <AccordionDetails>
              <p className="accordion-text">
                Сбор данных по анализам с учетом дополнительных демографических
                признаков(пол, возраст). Постановка диагноза в момент
                лабораторных испытаний(задача бинарной классификации).
                Отслеживание показателей анализов во времени и формирование
                рекомендаций пациенту.
              </p>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>

      <div className="functional-about-baum-swarm-content">
        <div className="functional-about-baum-swarm-img functional-about-baum-swarm-info"></div>
        <div className="functional-about-baum-swarm-info">
          <div className="functional-text">
            <h2>
              Ознакомьтесь с системой хранения данных BAUM SWARM (scale out)
            </h2>
            <p className="info-text">
              Воспользуйтесь преимуществами системы хранения данных,
              использующих постоянный корпоративный сервис по хранению данных в
              любом облаке по вашему выбору.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default FunctionalPlatform;
