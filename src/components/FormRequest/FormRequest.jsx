import React, { useState, useEffect, useRef, useCallback } from "react";
import {
  Container,
  Paper,
  Box,
  Grid,
  TextField,
  Select,
  FormControl,
  FormLabel,
  FormGroup,
  FormControlLabel,
  InputLabel,
  Typography,
  MenuItem,
  Checkbox,
  styled,
} from "@material-ui/core";
import Backdrop from "@mui/material/Backdrop";
import axios from 'axios';
import CircularProgress from "@mui/material/CircularProgress";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
import Button from "@mui/material/Button";
import DatePicker from "@mui/lab/DatePicker";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import "./FormRequest.scss";
import logo from "../../assets/BAUM.svg";
import emailjs from "emailjs-com";

const useFormFields = (initialString = "") => {
  const [fields, setValues] = useState(initialString);

  return [
    fields,
    function (e, name) {
      setValues({
        ...fields,
        [name]: e.target.value,
      });
    },
  ];
};

const TextLabel = styled(Typography)(({ theme }) => ({
  fontSize: "1.2rem",
  color: "#ffffff",
}));

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const FormRequest = () => {
  const form = useRef();

  const arrayClasses = ["Блочный", "Файловый", "Унифицированный"];

  const [hasBAUMSDS, setIsHasBaumSDS] = useState(false);
  const [arrayClass, setArrayClass] = useState(arrayClasses[0]);
  const [fromIndustrialEq, setInIndustrialEq] = useState(true);
  const [techSpec, setTechSpec] = useState(null);
  const [buyDate, setBuyDate] = useState(null);
  const [questionnaireOpen, setQuestionnaireOpen] = useState(false);
  const [showEmailSuccess, setShowEmailSuccess] = useState(false);
  const [backdrop, setBackdrop] = useState(false);
  const [error, setError] = useState(false);
  const [formFields, createChangeHandler] = useFormFields({
    "company-name": "",
    "TIN": "",
    "unit": "",
    "city": "",
    "project-name": "",
    "project-targets": "",
    "storage-space-needed": "",
    "what-services-used-on-sds": "",
    "what-sds-owned": "",
    "what-sds-looking-for": "",
    "budget": "",
    "name_partner": "",
    "TIN_partner": "",
    "fio_manager": "",
    "email_manager": "",
    "phone_manager": "",
    "fio_engeneer": "",
    "email_engeneer": "",
    "phone_engeneer": "",
  });

  const handleSetBaumSDSOwned = (event) => {
    setIsHasBaumSDS(event.target.value);
  };

  const handleSetArrayClass = (event) => {
    setArrayClass(event.target.value);
  };

  const handleSetInIndustrialEq = (event) => {
    setInIndustrialEq(event.target.checked);
  };

  const handleUploadTechnicalSpec = (event) => {
    setTechSpec(event.target.files[0]);
    setQuestionnaireOpen(false);
  };

  const clearFile = () => {
    setTechSpec(null);
  };

  const getNewElement = (name, value) => {
    const newElement = document.createElement('input');
    newElement.type = 'hidden'; // или другой тип поля
    newElement.name = name;
    newElement.value = value;
    return newElement;
  }

  const sendEmail = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const errorsCount = Object.keys(formFields).filter(field => formFields[field] === "").length;
    const date = getNewElement("dateOrder", new Date(buyDate).toLocaleDateString());
    const industrialEq = getNewElement("prom-reestr", (fromIndustrialEq ? "Да":"Нет"));
    const hasBAUM = getNewElement("has-shd-baum", (hasBAUMSDS ? "Да":"Нет"));
    form.current.appendChild(date);
    form.current.appendChild(industrialEq);
    form.current.appendChild(hasBAUM);
    setBackdrop(true);
    if (errorsCount === 0) {
      emailjs
        .sendForm(
          "default_service",
          "template_pwm9j1b",
          form.current,
          "user_7o8SubdpJawLjZzohguRM"
        )
        .then(
          function (response) {
            console.log("SUCCESS!", response.status, response.text);
            setTimeout(() => {
              setShowEmailSuccess(true);
              setBackdrop(false);
            }, 3000)
          },
          function (error) {
            setBackdrop(false);
            console.log(error);
          }
        );

    } else {
      setError(true);
      setTimeout(() => {
        setError(false);
        setBackdrop(false);
      }, 3000)
    }
  };

  const handleCloseMessage = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setShowEmailSuccess(false);
  };

  return (
    <>
      <div className="form-request">
        <Box
          sx={{
            height: "10vh",
            display: "flex",
            alignItems: "center",
          }}
        >
          <img
            src={logo}
            alt="BAUM LOGO"
            style={{ width: "25rem", color: "#ccc" }}
          />
        </Box>
        <Container maxWidth="lg">
          <Box className="form-wrapper">
            <Paper className="main-form" elevation={24}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  marginBottom: "5%",
                }}
              >
                <Typography variant="h5">Форма запроса:</Typography>
              </Box>
              <form enctype="multipart/form-data" ref={form}>
                <FormControl component="fieldset" className="fieldset">
                  <FormLabel
                    component="Legend"
                    className="fieldset legend_fill"
                  >
                    <center>
                      <b>Информация о заказчике</b>
                    </center>
                  </FormLabel>
                  <FormGroup>
                    <Grid container spacing={2}>
                      <Grid item xs={12} md={6}>
                        <Box className="form-column">
                          <TextField
                            name="company-name"
                            placeholder="Название компании"
                            label="Название компании"
                            variant="outlined"
                            type="text"
                            onChange={(e) =>
                              createChangeHandler(e, "company-name")
                            }
                            fullWidth
                            required
                          />
                        </Box>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Box className="form-column">
                          <TextField
                            name="TIN"
                            placeholder="ИНН"
                            label="ИНН"
                            variant="outlined"
                            type="text"
                            onChange={(e) => createChangeHandler(e, "TIN")}
                            fullWidth
                            required
                          />
                        </Box>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Box className="form-column">
                          <TextField
                            name="unit"
                            placeholder="Подразделение/филиал"
                            label="Подразделение/филиал"
                            variant="outlined"
                            type="text"
                            onChange={(e) => createChangeHandler(e, "unit")}
                            fullWidth
                            required
                          />
                        </Box>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Box className="form-column">
                          <TextField
                            name="city"
                            placeholder="Город"
                            label="Город"
                            variant="outlined"
                            type="text"
                            onChange={(e) => createChangeHandler(e, "city")}
                            fullWidth
                            required
                          />
                        </Box>
                      </Grid>
                    </Grid>
                  </FormGroup>
                </FormControl>
                <FormControl component="fieldset" className="fieldset">
                  <FormLabel
                    component="Legend"
                    className="fieldset legend_fill"
                  >
                    <center>
                      <b>Информация о партнере</b>
                    </center>
                  </FormLabel>
                  <FormGroup>
                    <Grid container spacing={2}>
                      <Grid item xs={12} md={6}>
                        <Box className="form-column">
                          <TextField
                            name="name_partner"
                            placeholder="Название компании"
                            label="Название компании"
                            variant="outlined"
                            type="text"
                            onChange={(e) =>
                              createChangeHandler(e, "name_partner")
                            }
                            fullWidth
                            required
                          />
                        </Box>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Box className="form-column">
                          <TextField
                            name="TIN_partner"
                            placeholder="ИНН"
                            label="ИНН"
                            variant="outlined"
                            type="text"
                            onChange={(e) =>
                              createChangeHandler(e, "TIN_partner")
                            }
                            fullWidth
                            required
                          />
                        </Box>
                      </Grid>
                      <Grid item xs={12} md={4}>
                        <Box className="form-column">
                          <TextField
                            name="fio_manager"
                            placeholder="ФИО менеджера проекта"
                            label="ФИО менеджера проекта"
                            variant="outlined"
                            type="text"
                            onChange={(e) =>
                              createChangeHandler(e, "fio_manager")
                            }
                            fullWidth
                            required
                          />
                        </Box>
                      </Grid>
                      <Grid item xs={12} md={4}>
                        <Box className="form-column">
                          <TextField
                            name="email_manager"
                            placeholder="E-mail менеджера проекта"
                            label="E-mail менеджера проекта"
                            variant="outlined"
                            type="text"
                            onChange={(e) =>
                              createChangeHandler(e, "email_manager")
                            }
                            fullWidth
                            required
                          />
                        </Box>
                      </Grid>
                      <Grid item xs={12} md={4}>
                        <Box className="form-column">
                          <TextField
                            name="phone_manager"
                            placeholder="Телефон менеджера проекта"
                            label="Телефон менеджера проекта"
                            variant="outlined"
                            type="text"
                            onChange={(e) =>
                              createChangeHandler(e, "phone_manager")
                            }
                            fullWidth
                            required
                          />
                        </Box>
                      </Grid>
                      <Grid item xs={12} md={4}>
                        <Box className="form-column">
                          <TextField
                            name="fio_engeneer"
                            placeholder="ФИО инженера проекта"
                            label="ФИО инженера проекта"
                            variant="outlined"
                            type="text"
                            onChange={(e) =>
                              createChangeHandler(e, "fio_engeneer")
                            }
                            fullWidth
                            required
                          />
                        </Box>
                      </Grid>
                      <Grid item xs={12} md={4}>
                        <Box className="form-column">
                          <TextField
                            name="email_engeneer"
                            placeholder="E-mail инженера проекта"
                            label="E-mail инженера проекта"
                            variant="outlined"
                            type="text"
                            onChange={(e) =>
                              createChangeHandler(e, "email_engeneer")
                            }
                            fullWidth
                            required
                          />
                        </Box>
                      </Grid>
                      <Grid item xs={12} md={4}>
                        <Box className="form-column">
                          <TextField
                            name="phone_engeneer"
                            placeholder="Телефон инженера проекта"
                            label="Телефон инженера проекта"
                            variant="outlined"
                            type="text"
                            onChange={(e) =>
                              createChangeHandler(e, "phone_engeneer")
                            }
                            fullWidth
                            required
                          />
                        </Box>
                      </Grid>
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <Box className="form-column"></Box>
                    </Grid>
                  </FormGroup>
                </FormControl>
                <FormControl component="fieldset" className="fieldset">
                  <FormLabel
                    component="Legend"
                    className="fieldset legend_fill"
                  >
                    <center>
                      <b>Информация о сделке</b>
                    </center>
                  </FormLabel>
                  <FormGroup>
                    <Grid container spacing={2}>
                      <Grid item xs={12} md={4}>
                        <Box className="form-column">
                          <TextField
                            name="project-name"
                            placeholder="Название проекта"
                            label="Название проекта"
                            variant="outlined"
                            type="text"
                            onChange={(e) =>
                              createChangeHandler(e, "project-name")
                            }
                            fullWidth
                            required
                          />
                        </Box>
                      </Grid>
                      <Grid item xs={12} md={4}>
                        <Box className="form-column">
                          <TextField
                            name="project-targets"
                            placeholder="Цели и задачи проекта"
                            label="Цели и задачи проекта"
                            variant="outlined"
                            type="text"
                            onChange={(e) =>
                              createChangeHandler(e, "project-targets")
                            }
                            fullWidth
                            required
                          />
                        </Box>
                      </Grid>
                      <Grid item xs={12} md={4}>
                        <Box className="form-column">
                          <FormControl fullWidth>
                            <InputLabel variant="outlined">
                              Имеет ли заказчик СХД BAUM
                            </InputLabel>
                            <Select
                              name="has-shd-baum"
                              placeholder="Имеет ли заказчик СХД BAUM"
                              value={hasBAUMSDS}
                              variant="outlined"
                              label="Имеет ли заказчик СХД BAUM"
                              onChange={handleSetBaumSDSOwned}
                            >
                              <MenuItem value={true}>Да</MenuItem>
                              <MenuItem value={false}>Нет</MenuItem>
                            </Select>
                          </FormControl>
                        </Box>
                      </Grid>
                      <Grid item xs={12} md={4}>
                        <Box className="form-column">
                          <FormControl fullWidth>
                            <InputLabel variant="outlined">
                              Класс приобретаемого массива
                            </InputLabel>
                            <Select
                              name="array-class"
                              placeholder="Класс приобретаемого массива"
                              value={arrayClass}
                              variant="outlined"
                              label="Класс приобретаемого массива"
                              onChange={handleSetArrayClass}
                            >
                              {arrayClasses.map((arrayClass, index) => (
                                <MenuItem key={index} value={arrayClass}>
                                  {arrayClass}
                                </MenuItem>
                              ))}
                            </Select>
                          </FormControl>
                        </Box>
                      </Grid>
                      <Grid item xs={12} md={4}>
                        <Box className="form-column">
                          <TextField
                            name="storage-space-needed"
                            placeholder="Необходимый объем массива в ТБ"
                            label="Необходимый объем массива в ТБ"
                            variant="outlined"
                            type="text"
                            onChange={(e) =>
                              createChangeHandler(e, "storage-space-needed")
                            }
                            fullWidth
                            required
                          />
                        </Box>
                      </Grid>
                      <Grid item xs={12} md={4}>
                        <Box className="form-column">
                          <TextField
                            name="what-services-used-on-sds"
                            placeholder="Под какие сервисы планируется использовать СХД"
                            label="Какие сервисы планируется использовать на СХД"
                            variant="outlined"
                            type="text"
                            onChange={(e) =>
                              createChangeHandler(
                                e,
                                "what-services-used-on-sds"
                              )
                            }
                            fullWidth
                            required
                          />
                        </Box>
                      </Grid>
                      <Grid item xs={12} md={4}>
                        <Box className="form-column">
                          <FormControlLabel
                            control={
                              <Checkbox
                                name="prom-reestr"
                                checked={fromIndustrialEq}
                                label="СХД должна быть из реестра промышленного оборудования"
                                onChange={handleSetInIndustrialEq}
                                inputProps={{ "aria-label": "controlled" }}
                              />
                            }
                            label="Из реестра промышленного оборудования?"
                          />
                        </Box>
                      </Grid>
                      <Grid item xs={12} md={4}>
                        <Box className="form-column"></Box>
                      </Grid>
                      <Grid item xs={12} md={4}>
                        <Box className="form-column"></Box>
                      </Grid>
                      <Grid item xs={12} md={8}>
                        <Box
                          className="form-column"
                          sx={{
                            display: "flex",
                            gap: "5rem",
                            flexDirection: "row",
                          }}
                        >
                          <Button
                            variant="contained"
                            component="label"
                            color="error"
                            size="small"
                            label="Загрузить техническое задание"
                            sx={{
                              padding: "0.6rem 2rem",
                            }}
                          >
                            Загрузить файл ТЗ
                            <input
                              type="file"
                              name="file_tz"
                              onChange={handleUploadTechnicalSpec}
                              hidden
                            />
                          </Button>
                          <Typography>или</Typography>
                          {!!!techSpec && (
                            <Button
                              variant="contained"
                              color="error"
                              size="small"
                              label="Заполните опросник"
                              sx={{
                                padding: "0.6rem 2rem",
                              }}
                              onClick={() => setQuestionnaireOpen(true)}
                            >
                              Заполните опросник
                            </Button>
                          )}
                        </Box>
                      </Grid>
                      <Grid item xs={12} md={4}>
                        <Box className="form-column">
                          {!!!techSpec ? (
                            <></>
                          ) : (
                            <>
                              <TextLabel variant="h6">
                                <span
                                  style={{
                                    textDecoration: "underline",
                                    color: "#000",
                                  }}
                                >
                                  {techSpec.name}
                                </span>
                                <span
                                  style={{
                                    color: "red",
                                    paddingLeft: "5px",
                                    fontSize: "1.3rem",
                                  }}
                                  onClick={clearFile}
                                >
                                  ✖
                                </span>
                              </TextLabel>
                            </>
                          )}
                        </Box>
                      </Grid>
                      <Grid item xs={12} md={4}>
                        <Box className="form-column">
                          <TextField
                            name="what-sds-owned"
                            placeholder="Какие системы хранения данных уже имеются"
                            label="Какие системы хранения данных уже имеются"
                            variant="outlined"
                            type="text"
                            onChange={(e) =>
                              createChangeHandler(e, "what-sds-owned")
                            }
                            fullWidth
                            required
                          />
                        </Box>
                      </Grid>
                      <Grid item xs={12} md={4}>
                        <Box className="form-column">
                          <TextField
                            name="what-sds-looking-for"
                            placeholder="Рассматривает ли заказчик предложения других СХД(каких)"
                            label="Рассматриваются ли другие СХД(какие)"
                            variant="outlined"
                            type="text"
                            onChange={(e) =>
                              createChangeHandler(e, "what-sds-looking-for")
                            }
                            fullWidth
                            required
                          />
                        </Box>
                      </Grid>
                      <Grid item xs={12} md={4}>
                        <Box className="form-column"></Box>
                      </Grid>
                      <Grid item xs={12} md={4}>
                        <Box className="form-column">
                          <TextField
                            name="budget"
                            placeholder="Имеется ли бюджет под проект, какой"
                            label="Имеется ли бюджет под проект, какой"
                            variant="outlined"
                            type="text"
                            onChange={(e) => createChangeHandler(e, "budget")}
                            fullWidth
                            required
                          />
                        </Box>
                      </Grid>
                      <Grid item xs={12} md={4}>
                        <Box className="form-column">
                          <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DatePicker
                              label="Выберите дату закупки"
                              name="dateOrder"
                              value={buyDate}
                              onChange={(newValue) => {
                                setBuyDate(newValue);
                              }}
                              renderInput={(params) => (
                                <TextField {...params} />
                              )}
                            />
                          </LocalizationProvider>
                        </Box>
                      </Grid>
                      <Grid item xs={12} md={4}>
                        <Box className="form-column">
                          <TextField
                            name="gov-link"
                            placeholder="Ссылки на сайт госзакупок"
                            label="Ссылки на сайт госзакупок"
                            variant="outlined"
                            type="text"
                            onChange={(e) => createChangeHandler(e, "gov-link")}
                            fullWidth
                            required
                          />
                        </Box>
                      </Grid>
                    </Grid>
                  </FormGroup>
                </FormControl>
                {questionnaireOpen && (
                  <FormControl
                    component="fieldset"
                    className="fieldset_questionnaire"
                  >
                    <FormLabel
                      component="Legend"
                      className="fieldset_questionnaire legend_questionnaire"
                    >
                      <center>
                        <b>Ответьте на вопросы по новой СХД</b>
                      </center>
                    </FormLabel>
                    <FormGroup>
                      <Grid container spacing={2}>
                        <Grid item xs={12} md={12}>
                          <Box className="form-column">
                            <TextField
                              name="tasks_for_sds"
                              placeholder="Под какие задачи планируется СХД"
                              label="Под какие задачи планируется СХД"
                              variant="outlined"
                              type="text"
                              // onChange={(e) =>
                              //   createChangeHandler(e, "tasks_for_sds")
                              // }
                              fullWidth
                              required
                            />
                          </Box>
                        </Grid>
                        <Grid item xs={12} md={12}>
                          <Box className="form-column">
                            <TextField
                              name="what-ifaces-needed"
                              placeholder="Какие необходимы интерфейсы для подключения к вашей инфраструктуре?"
                              label="Какие необходимы интерфейсы для подключения к вашей инфраструктуре?"
                              variant="outlined"
                              type="text"
                              // onChange={(e) =>
                              //   createChangeHandler(e, "what-ifaces-needed")
                              // }
                              fullWidth
                              required
                            />
                          </Box>
                        </Grid>{" "}
                        <Grid item xs={12} md={12}>
                          <Box className="form-column">
                            <TextField
                              name="what-protocols-needed"
                              placeholder="По каким протоколам будет осуществлена работа с СХД?"
                              label="По каким протоколам будет осуществлена работа с СХД?"
                              variant="outlined"
                              type="text"
                              // onChange={(e) =>
                              //   createChangeHandler(e, "what-protocols-needed")
                              // }
                              fullWidth
                              required
                            />
                          </Box>
                        </Grid>{" "}
                        <Grid item xs={12} md={12}>
                          <Box className="form-column">
                            <TextField
                              name="what-space-needed"
                              placeholder="Какие необходимы объемы системы хранения данных?"
                              label="Какие необходимы объемы системы хранения данных?"
                              variant="outlined"
                              type="text"
                              // onChange={(e) =>
                              //   createChangeHandler(e, "what-space-needed")
                              // }
                              fullWidth
                              required
                            />
                          </Box>
                        </Grid>
                        <Grid item xs={12} md={12}>
                          <Box className="form-column">
                            <TextField
                              name="what-perf-requirements"
                              placeholder="Есть ли требования к производительности СХД?"
                              label="Есть ли требования к производительности СХД?"
                              variant="outlined"
                              type="text"
                              // onChange={(e) =>
                              //   createChangeHandler(e, "what-perf-requirements")
                              // }
                              fullWidth
                              required
                            />
                          </Box>
                        </Grid>
                        <Grid item xs={12} md={12}>
                          <Box className="form-column">
                            <TextField
                              name="have-you-sds"
                              placeholder="Имеется ли сейчас в вашей инфраструктуре СХД?"
                              label="Имеется ли сейчас в вашей инфраструктуре СХД?"
                              variant="outlined"
                              type="text"
                              // onChange={(e) =>
                              //   createChangeHandler(e, "have-you-sds")
                              // }
                              fullWidth
                              required
                            />
                          </Box>
                        </Grid>
                        <Grid item xs={12} md={12}>
                          <Box className="form-column">
                            <TextField
                              name="need-migration-to-new-sds"
                              placeholder="Требуется ли миграция данных на новую СХД?"
                              label="Требуется ли миграция данных на новую СХД?"
                              variant="outlined"
                              type="text"
                              // onChange={(e) =>
                              //   createChangeHandler(
                              //     e,
                              //     "need-migration-to-new-sds"
                              //   )
                              // }
                              fullWidth
                              required
                            />
                          </Box>
                        </Grid>
                        <Grid item xs={12} md={12}>
                          <Box className="form-column">
                            <TextField
                              name="need-deduplication"
                              placeholder="Требуется ли дедупликация данных?"
                              label="Требуется ли дедупликация данных?"
                              variant="outlined"
                              type="text"
                              // onChange={(e) =>
                              //   createChangeHandler(e, "need-deduplication")
                              // }
                              fullWidth
                              required
                            />
                          </Box>
                        </Grid>
                        <Grid item xs={12} md={12}>
                          <Box className="form-column">
                            <TextField
                              name="need-compression"
                              placeholder="Требуется ли компрессия данных?"
                              label="Требуется ли компрессия данных?"
                              variant="outlined"
                              type="text"
                              // onChange={(e) =>
                              //   createChangeHandler(e, "need-compression")
                              // }
                              fullWidth
                              required
                            />
                          </Box>
                        </Grid>
                        <Grid item xs={12} md={12}>
                          <Box className="form-column">
                            <TextField
                              name="need-backup-apps"
                              placeholder="Требуется ли резервное копирование приложений?"
                              label="Требуется ли резервное копирование приложений?"
                              variant="outlined"
                              type="text"
                              // onChange={(e) =>
                              //   createChangeHandler(e, "need-backup-apps")
                              // }
                              fullWidth
                              required
                            />
                          </Box>
                        </Grid>
                        <Grid item xs={12} md={12}>
                          <Box className="form-column">
                            <TextField
                              name="what-support-level-needed"
                              placeholder="Какой необходим уровень сервисной поддержки?"
                              label="Какой необходим уровень сервисной поддержки?"
                              variant="outlined"
                              type="text"
                              // onChange={(e) =>
                              //   createChangeHandler(
                              //     e,
                              //     "what-support-level-needed"
                              //   )
                              // }
                              fullWidth
                              required
                            />
                          </Box>
                        </Grid>
                        <Grid item xs={12} md={12}>
                          <Box className="form-column">
                            <TextField
                              name="look-you-for-another-vendors"
                              placeholder="Рассматривали ли Вы предложения от других производителей?"
                              label="Рассматривали ли Вы предложения от других производителей?"
                              variant="outlined"
                              type="text"
                              // onChange={(e) =>
                              //   createChangeHandler(
                              //     e,
                              //     "look-you-for-another-vendors"
                              //   )
                              // }
                              fullWidth
                              required
                            />
                          </Box>
                        </Grid>
                        <Grid item xs={12} md={12}>
                          <Box className="form-column">
                            <TextField
                              name="when-sds-running-up"
                              placeholder="Когда планируется ввод в эксплуатацию СХД?"
                              label="Когда планируется ввод в эксплуатацию СХД?"
                              variant="outlined"
                              type="text"
                              // onChange={(e) =>
                              //   createChangeHandler(e, "when-sds-running-up")
                              // }
                              fullWidth
                              required
                            />
                          </Box>
                        </Grid>
                      </Grid>
                    </FormGroup>
                  </FormControl>
                )}
                <Grid container spacing={6}>
                  <Grid item xs={12} md={12}>
                    <Box sx={{ paddingTop: "20px" }}>
                      <Button
                        variant="contained"
                        color="success"
                        size="small"
                        type="submit"
                        label="Отправить форму"
                        sx={{
                          width: "100%",
                          padding: "0.6rem 2rem",
                        }}
                        onClick={e => sendEmail(e)}
                      >
                        Отправить
                      </Button>
                    </Box>
                  </Grid>
                </Grid>
              </form>
            </Paper>
          </Box>
        </Container>
        <Snackbar
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          open={showEmailSuccess}
          autoHideDuration={6000}
          onClose={handleCloseMessage}
          key={"bottomright"}
        >
          <Alert
            onClose={handleCloseMessage}
            severity="success"
            sx={{ width: "100%" }}
          >
            Форма опроса успешно отправлена
          </Alert>
        </Snackbar>
        <Snackbar
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          open={error}
          autoHideDuration={6000}
          onClose={handleCloseMessage}
          key={"bottomright"}
        >
          <Alert
            onClose={handleCloseMessage}
            severity="error"
            sx={{ width: "100%" }}
          >
            Не все поля формы заполнены!
          </Alert>
        </Snackbar>
      </div>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={backdrop}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </>
  );
};

export default FormRequest;
