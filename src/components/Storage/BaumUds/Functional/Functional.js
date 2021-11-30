import React, { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button,
} from "@material-ui/core";

import "./Functional.scss";
import arrowBottomImg from "../../../../assets/arrow-bottom.svg";
import arrowBottomBlackImg from "../../../../assets/arrow-bottom-black.svg";

const Functional = () => {
  const [isButtonHoveredLeft, setIsButtonHoveredLeft] = useState({
    isButtonHoveredLeft: [false, false, false, false, false, false],
  });

  const [isButtonHoveredRight, setIsButtonHoveredRight] = useState({
    isButtonHoveredRight: [false, false, false, false, false],
  });

  const changedArrowLeft = (hoverIndex) => {
    isButtonHoveredLeft.isButtonHoveredLeft = [
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
    ];
    setIsButtonHoveredRight({ ...isButtonHoveredRight });
  };

  return (
    <div className="functional-container">
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
              <h4>RAID B3</h4>
            </AccordionSummary>
            <AccordionDetails>
              <div>
                <ul className="accordion-text">
                  <li> Тройной контроль честности</li>
                  <li>
                    Увеличение отказоустойчивости в 100 раз по сравнению с
                    RAID-6
                  </li>
                  <li>
                    RAID-B3 можно использовать для SSD, SAS, NVMe, и NL-SAS
                    дисков большого объёма
                  </li>
                  <li>
                    Максимальная длина RAID-B3 группы составляет 20 дисков
                  </li>
                  <li> RAID-B3 рекомендуется для дисков объёмом 4TB и выше</li>
                  <li>
                    Улучшаем показатели производительности при деградации пула
                    по сравнению с RAID-6
                  </li>
                </ul>
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
              <h4>BPOOL</h4>
            </AccordionSummary>
            <AccordionDetails>
              <div>
                <p className="accordion-text">
                  Структура пулов: RAID 10,50,60,B30
                </p>
                <div className="pools-structure">
                  <div className="pools-structure-block">RAID 1,5,6,B3</div>
                  <div className="pools-structure-block">RAID 1,5,6,B3</div>
                </div>
                <div className="pools-structure">
                  <div className="pools-structure-block">RAID 1,5,6,B3</div>
                  <div className="pools-structure-block">RAID 1,5,6,B3</div>
                </div>
                <div className="pools-structure">
                  <div className="pools-structure-block">RAID 1,5,6,B3</div>
                  <div className="pools-structure-block">RAID 1,5,6,B3</div>
                </div>
              </div>
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
              <h4>BClone</h4>
            </AccordionSummary>
            <AccordionDetails>
              <div>
                <ul className="accordion-text">
                  <li>Защита и восстановление данных</li>
                  <li>
                    Позволяет минимизировать использование пространства СХД
                  </li>
                  <li>
                    BClone создает логические копии, на основе снимков данных
                  </li>
                  <li>Практически не влияет на производительность системы</li>
                  <li>Моментальное создание клона</li>
                </ul>
                <Button
                  className="btn btn-light"
                  // endIcon={<ArrowRightAltIcon />}
                >
                  Читать дальше
                </Button>
              </div>
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
              <h4>Deduplication</h4>
            </AccordionSummary>
            <AccordionDetails>
              <div>
                <ul className="accordion-text">
                  <li>
                    Дедупликация позволяет сократить объёмы физических носителей
                    для хранения тех же объёмов данных
                  </li>
                  <li>
                    Дедупликация данных - обнаруживает и исключает избыточные
                    данные при записи
                  </li>
                  <li>
                    Блочная дедупликация 4к блоками (Поддерживает все
                    протоколы).
                  </li>
                  <li>Практически не снижает производительность работы СХД.</li>
                  <li>Полностью прозрачно для приложений.</li>
                </ul>
              </div>
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
              <h4>B-REPL</h4>
            </AccordionSummary>
            <AccordionDetails>
              <div>
                <ul className="accordion-text">
                  <li>Репликация</li>
                  <li>
                    B-REPL - это средство синхронной или асинхронной репликации
                    данных между двумя физическими системами хренения
                  </li>
                  <li>
                    Реплицирует данные как по IP-сети так и по сети Fiber
                    Channel
                  </li>
                  <li>Средство обеспечения катастрофоустойчивости</li>
                </ul>
              </div>
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
              <h4>BCache</h4>
            </AccordionSummary>
            <AccordionDetails>
              <div>
                <ul className="accordion-text">
                  <li>Увеличение производительности</li>
                  <li>
                    Увеличение производительности благодаря эффективным
                    алгоритмам кеширования
                  </li>
                  <li>
                    Использование энергозависимой кэш памяти NVDIMM 8/16 ГБ
                  </li>
                  <li>До 60 ТБ кэша на SSD или NVMe</li>
                </ul>
              </div>
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
              <h4>BAUM FS</h4>
            </AccordionSummary>
            <AccordionDetails>
              <div>
                <ul className="accordion-text">
                  <li>Файловая система</li>
                  <li>
                    Baum FS - 128 битная, надежная, самовосстанавливающаяся
                    файловая система
                  </li>
                  <li>Имеет древовидную структуру адресации данных</li>
                  <li>Поддержка RAID 1, 5, 6, B3, 10, 50, 60, B30</li>
                  <li>
                    Увеличение объема пула без прерывания доступа к данным
                  </li>
                  <li>Эфективная запись на диски, «полным страйпом»</li>
                  <li>Масштабируемость до 8 контроллеров</li>
                </ul>
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
              <h4>Snapshot</h4>
            </AccordionSummary>
            <AccordionDetails>
              <ul className="accordion-text">
                <li>Снимки данных</li>
                <li>
                  Снимок - моментальная копия состояния данных в системе
                  хранения
                </li>
                <li>До 255 снимков на том</li>
                <li>Не влияют на производительность системы</li>
                <li>Восстановление БД за несколько минут</li>
                <li>Plugin для создания консистентных снимков данных</li>
                <li>
                  Место на диске занимают только изменения, произошедшие между
                  снимками
                </li>
              </ul>
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
              <h4>BWORM</h4>
            </AccordionSummary>
            <AccordionDetails>
              <div>
                <ul className="accordion-text">
                  <li>Защита данных</li>
                  <li>WORM - однократная запись, многократное считывание</li>
                  <li>
                    Позволяет защитить критически важные файлы от шифрования,
                    удаления или их подмены в NAS окружении
                  </li>
                  <li>Настраиваемые политики WORM</li>
                </ul>
              </div>
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
              <h4>Compression</h4>
            </AccordionSummary>
            <AccordionDetails>
              <div>
                <ul className="accordion-text">
                  <li>Включается на уровне тома и файловых систем</li>
                  <li>Прозрачно для приложений</li>
                  <li>Увеличивает производительность СХД для NL-SAS дисков</li>
                  <li>Сжатие данных при записи</li>
                </ul>
              </div>
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
              <h4>This Provisioning</h4>
            </AccordionSummary>
            <AccordionDetails>
              <div>
                <ul className="accordion-text">
                  <li>Thin Provisioning - это «тонкое выделение» емкости</li>
                  <li>Позволяет выделить места больше размера пула</li>
                  <li>
                    Место на дисках пула становиться совместно используемым
                    ресурсом
                  </li>
                  <li>
                    ВСЕ свободное место пула доступно для увеличения
                    пространства ВСЕМ томам этого пула
                  </li>
                  <li>
                    Позволяет облегчить администрирование при распределении
                    пространства
                  </li>
                  <li>
                    Thin Provisioning - методика выделения пространства по мере
                    возникновения потребности
                  </li>
                </ul>
              </div>
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
    </div>
  );
};
export default Functional;
