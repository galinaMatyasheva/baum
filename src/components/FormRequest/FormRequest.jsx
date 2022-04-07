import React, { useState, useEffect, useRef } from "react";
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

  const sendEmail = () => {
    setBackdrop(true);
    emailjs
      .sendForm(
        "default_service",
        "template_i4nkt2p",
        form.current,
        "user_7o8SubdpJawLjZzohguRM"
      )
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
          setBackdrop(false);
          setShowEmailSuccess(true);
          setTimeout(() => {
            setShowEmailSuccess(false);
          }, 2500);
        },
        function (error) {
          console.log("FAILED...", error);
        }
      );
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
              <form ref={form}>
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
                      <Grid item xs={12} md={4}>
                        <Box className="form-column" sx={{}}>
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
                              onChange={handleUploadTechnicalSpec}
                              hidden
                            />
                          </Button>
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
                        <Box className="form-column"></Box>
                      </Grid>
                      <Grid item xs={12} md={4}>
                        <Box className="form-column">
                          <TextField
                            name="what-sds-owned"
                            placeholder="Какие системы хранения данных уже имеются"
                            label="Какие системы хранения данных уже имеются"
                            variant="outlined"
                            type="text"
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
                            fullWidth
                            required
                          />
                        </Box>
                      </Grid>
                      <Grid item xs={12} md={4}>
                        <Box className="form-column">
                          <TextField
                            name="activities"
                            placeholder="Проведенные активности"
                            label="Проведенные активности"
                            variant="outlined"
                            type="text"
                            fullWidth
                            required
                          />
                        </Box>
                      </Grid>
                      <Grid item xs={12} md={4}>
                        <Box className="form-column">
                          <TextField
                            name="budget"
                            placeholder="Имеется ли бюджет под проект, какой"
                            label="Имеется ли бюджет под проект, какой"
                            variant="outlined"
                            type="text"
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
                      <Grid item xs={12} md={4}>
                        <Box className="form-column">
                          <TextField
                            name="name_partner"
                            placeholder="Название компании"
                            label="Название компании"
                            variant="outlined"
                            type="text"
                            fullWidth
                            required
                          />
                        </Box>
                      </Grid>
                      <Grid item xs={12} md={4}>
                        <Box className="form-column">
                          <TextField
                            name="TIN_partner"
                            placeholder="ИНН"
                            label="ИНН"
                            variant="outlined"
                            type="text"
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
                            fullWidth
                            required
                          />
                        </Box>
                      </Grid>
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <Box className="form-column"></Box>
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <Box className="form-column">
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
                        label="Отправить форму"
                        sx={{
                          width: "100%",
                          padding: "0.6rem 2rem",
                        }}
                        onClick={sendEmail}
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
