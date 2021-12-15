import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button
} from "@material-ui/core";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import { useNavigate } from "react-router-dom";

import "./FunctionalPlatform.scss";
import Header from "../../../Header/Header";
import Footer from "../../../Footer/Footer";
import NavbarSwarm from "../Navbar/Navbar";

const FunctionalPlatform = () => {
  let navigate = useNavigate();

  const scrollToTop = () => {
    setTimeout(() => {
      const aboutPageNode = document.getElementById("app");
      aboutPageNode.scrollIntoView({ behavior: "smooth" });
    }, 0);
  };

  const handleClickBaumUds = () => {
    navigate("/baum-uds");
    scrollToTop();
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
            <AccordionSummary expandIcon={<KeyboardArrowDownIcon />}>
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
            <AccordionSummary expandIcon={<KeyboardArrowDownIcon />}>
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
            <AccordionSummary expandIcon={<KeyboardArrowDownIcon />}>
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
            <AccordionSummary expandIcon={<KeyboardArrowDownIcon />}>
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
            <AccordionSummary expandIcon={<KeyboardArrowDownIcon />}>
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
            <AccordionSummary expandIcon={<KeyboardArrowDownIcon />}>
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
            <AccordionSummary expandIcon={<KeyboardArrowDownIcon />}>
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
            <AccordionSummary expandIcon={<KeyboardArrowDownIcon />}>
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
            <AccordionSummary expandIcon={<KeyboardArrowDownIcon />}>
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
            <AccordionSummary expandIcon={<KeyboardArrowDownIcon />}>
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
            <AccordionSummary expandIcon={<KeyboardArrowDownIcon />}>
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
            <AccordionSummary expandIcon={<KeyboardArrowDownIcon />}>
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
            <AccordionSummary expandIcon={<KeyboardArrowDownIcon />}>
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
            <AccordionSummary expandIcon={<KeyboardArrowDownIcon />}>
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
            <AccordionSummary expandIcon={<KeyboardArrowDownIcon />}>
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
            <AccordionSummary expandIcon={<KeyboardArrowDownIcon />}>
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
            <AccordionSummary expandIcon={<KeyboardArrowDownIcon />}>
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
            <h2>Ознакомьтесь с системой хранения данных BAUM UDS</h2>
            <p className="info-text">
              BAUM UDS предоставляет качественный продукт для управления
              данными, с применением современных флэш-технологий, как на
              файловом, так и на блочном уровне для самых требовательных
              приложений таких как: базы данных, виртуальных сред, резервное
              копирования.
            </p>
            <Button
              className="btn btn-form"
              onClick={handleClickBaumUds}
              endIcon={<ArrowRightAltIcon />}
            >
              Подробнее
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default FunctionalPlatform;
