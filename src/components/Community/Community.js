import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button,
} from "@material-ui/core";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useNavigate } from "react-router-dom";

import "./Community.scss";
import ApplicationForm from "../../content/ApplicationForm/ApplicationForm";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import pdfIcon from "../../assets/pdf.svg";

import AcronisCertPreview from "../../assets/certs_preview/acronis_comp_cert.png";
import CitronixCertPreview from "../../assets/certs_preview/citronix_comp_cert.png";
import CyberProtectBaumCertPreview from "../../assets/certs_preview/cyberprotect_comp_cert_baum_inform.png";
import CyberProtectSkshdCertPreview from "../../assets/certs_preview/cyberprotect_comp_cert_sk_shd.png";
import OrionBaumCertPreview from "../../assets/certs_preview/orion_comp_cert_baum_inform.png";
import OrionSkshdCertPreview from "../../assets/certs_preview/orion_comp_cert_sk_shd.png";
import AstraNpobaumCertPreview from "../../assets/certs_preview/astra_comp_cert_npobaum.png";
import AstraSkshdCertPreview from "../../assets/certs_preview/astra_comp_cert_sk_shd.png";
import ZvirtCertPreview from "../../assets/certs_preview/zvirt_comp_cert.png";


const compatibilityCerts = [
  { name: "Сертификат соместимости Acronis", file: "/pdf/certs_compatible/acronis_compatible_cert.pdf"},
  { name: "Сертификат соместимости Citronix", file: "/pdf/certs_compatible/citronix_compatible_cert.pdf"},
  { name: "Сертификат соместимости Zvirt", file: "/pdf/certs_compatible/zvirt_compatible_cert.pdf"},
  { name: "Сертификат соместимости BAUM Storage: Astra Linux ", file: "/pdf/certs_compatible/astra_compatible_cert_storage.pdf"},
  { name: "Сертификат соместимости BAUM AI Platform: Astra Linux", file: "/pdf/certs_compatible/astra_compatible_cert_aiplatform.pdf"},
]

const compatibilityCerts2 = [
  {
    group: "Сертификаты соместимости Acronis" ,
    certs: [
      {
        name: "Сертификат соместимости Acronis",
        file: "/pdf/certs_compatible/acronis_compatibility_cert.pdf",
        img: AcronisCertPreview
      },
    ]
  },
  {
    group: "Сертификаты соместимости Citronix" ,
    certs: [
      {
        name: "Сертификат соместимости Citronix",
        file: "/pdf/certs_compatible/citrnonix_compatibility_cert.pdf",
        img: CitronixCertPreview
      },
    ]
  },
  {
    group: "Сертификаты соместимости CyberProtect" ,
    certs: [
      {
        name: "Сертификат соместимости CyberProtect BAUM Inform",
        file: "/pdf/certs_compatible/cyberprotect_compatibility_cert_baum_inform.pdf",
        img: CyberProtectBaumCertPreview
      },
      {
        name: "Сертификат соместимости CyberProtect SK-SHD",
        file: "/pdf/certs_compatible/cyberprotect_compatibility_cert_sk_shd.pdf",
        img: CyberProtectSkshdCertPreview
      },
    ]
  },
  {
    group: "Сертификаты соместимости Orion" ,
    certs: [
      {
        name: "Сертификат соместимости Orion и BAUM Inform",
        file: "/pdf/certs_compatible/orion_compatibility_cert_baum_inform.pdf",
        img: OrionBaumCertPreview
      },
      {
        name: "Сертификат соместимости Orion и SK-SHD",
        file: "/pdf/certs_compatible/orion_compatibility_cert_sk_shd.pdf",
        img: OrionSkshdCertPreview
      },
    ]
  },
  {
    group: "Сертификаты соместимости zVirt" ,
    certs: [
      {
        name: "Сертификат соместимости zVirt",
        file: "/pdf/certs_compatible/zvirt_compatibility_cert_sk_shd.pdf",
        img: ZvirtCertPreview
      },
    ]
  },
  {
    group: "Сертификаты соместимости Astra Linux" ,
    certs: [
      {
        name: "Сертификат соместимости Astra Linux и НПО БАУМ",
        file: "/pdf/certs_compatible/astra_compatibility_cert_npobaum.pdf",
        img: AstraNpobaumCertPreview
      },
      {
        name: "Сертификат соместимости Astra Linux и SK-SHD",
        file: "/pdf/certs_compatible/astra_compatibility_cert_sk_shd.pdf",
        img: AstraSkshdCertPreview
      },
    ]
  },
]

const Community = () => {
  let navigate = useNavigate();

  const scrollToTop = () => {
    setTimeout(() => {
      const aboutPageNode = document.getElementById("app");
      aboutPageNode.scrollIntoView({ behavior: "smooth" });
    }, 0);
  };

  const handleClickPartners = () => {
    navigate("/partners");
    scrollToTop();
  };

  const handleClickNews = () => {
    navigate("/news");
    scrollToTop();
  };

  return (
    <section className="community-container">
      <Header />
      <div className="community-container-info">
        <div className="community-img community-info">
          <h1>Community</h1>
        </div>
        <div className="community-info">
          <Accordion>
            <AccordionSummary expandIcon={<KeyboardArrowDownIcon />}>
              <h4>База знаний</h4>
            </AccordionSummary>
            <AccordionDetails>
              <div className="accordion-content">
                <p className="accordion-text">
                  В нашей базе знаний можно узнать об описании системы,
                  разобраться с настройками, скачать инструкции и найти решение
                  любой проблемы.
                </p>
                <Button
                  target="_blank"
                  href="https://kb.npobaum.ru"
                  className="btn btn-light"
                  endIcon={<ArrowRightAltIcon />}
                >
                  Войти в личный кабинет
                </Button>
              </div>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<KeyboardArrowDownIcon />}>
              <h4>Сообщество СХД и ИИ</h4>
            </AccordionSummary>
            <AccordionDetails>
              <div className="accordion-content">
                <p className="accordion-text">
                  Мы формируем сообщество IT-профессионалов по AI и СХД.
                  Разрабатываем учебные курсы, обучаем, создаем продукты и
                  отстаиваем свои идеи на профессиональных конференциях. На
                  профессиональных конференциях, таких как: Армия 2021,
                  соглашение между МГТУ им Н.Э.Баумана и НИЦ институт им.
                  Жуковского, ВИТ ЭРА, Связь 2021 и прочее.
                </p>
                <Button
                  className="btn btn-light"
                  endIcon={<ArrowRightAltIcon />}
                  onClick={handleClickNews}
                >
                  Читать дальше
                </Button>
              </div>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<KeyboardArrowDownIcon />}>
              <h4>Партнёры и дистрибьюторы</h4>
            </AccordionSummary>
            <AccordionDetails>
              <div className="accordion-content">
                <p className="accordion-text">
                  Мы объединили наши усилия для ускорения и реализации наших
                  проектов вместе
                </p>
                <Button
                  className="btn btn-light"
                  endIcon={<ArrowRightAltIcon />}
                  onClick={handleClickPartners}
                >
                  Читать дальше
                </Button>
              </div>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<KeyboardArrowDownIcon />}>
              <h4>Сертификаты совместимости</h4>
            </AccordionSummary>
            <AccordionDetails>
              <div className="accordion-content">
                  {compatibilityCerts2.map(item => (
                      <Accordion elevation={0}>
                        <AccordionSummary>
                          <span className="dotted-underline-text">{item.group}</span>
                        </AccordionSummary>
                        <AccordionDetails>
                          <div className="pdf-file-table">
                              {item.certs.map(cert => (
                                  <div className="pdf-table-item">
                                    <Button href={cert.file} >
                                      <img
                                          src={cert.img}
                                          alt="img"
                                          className="pdf-icon"
                                        />
                                      <p style={{color: 'black', fontSize: '14px'}}>{cert.name}</p>
                                    </Button>
                                  </div>
                                ))}
                          </div>
                        </AccordionDetails>
                      </Accordion>
                  ))}

                  {/* <Accordion elevation={0}>
                    <AccordionSummary>
                      <span className="dotted-underline-text">Тест</span>
                      </AccordionSummary>
                    <AccordionDetails>
                      <div className="pdf-file-table">
                          {compatibilityCerts.map(cert => (
                              <div className="pdf-table-item">
                                <Button href={cert.file} >
                                  <img
                                      src={pdfIcon}
                                      alt="img"
                                      className="pdf-icon"
                                    />
                                  <p style={{color: 'black', fontSize: '10px'}}>{cert.name}</p>
                                </Button>
                              </div>
                            ))}
                      </div>
                    </AccordionDetails>
                  </Accordion> */}
              </div>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>

      <ApplicationForm />
      <Footer />
    </section>
  );
};

export default Community;
