import React, { useRef, useState } from "react";
import {
  Button,
  Checkbox,
  FormGroup,
  FormControlLabel,
  TextField,
} from "@material-ui/core";
import emailjs from "emailjs-com";

import "./ApplicationForm.scss";

const ApplicationForm = () => {
  const [showEmailSuccess, setShowEmailSuccess] = useState(false);
  const form = useRef();

  const sendEmail = () => {
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
          setShowEmailSuccess(true);
        },
        function (error) {
          console.log("FAILED...", error);
        }
      );
  };

  return (
    <div className="application-form-container-info">
      <div className="application-form-img"></div>
      <div className="application-form-info">
        {showEmailSuccess ? (
          <h1 className="application-form-massage-success">Ваше сообщение отправлено успешно!</h1>
        ) : (
          <form className="application-form-content" ref={form}>
            <h1>Оставьте заявку и мы с вами свяжемся!</h1>
            <div className="application-form-content-info">
              <div className="application-form-textfields">
                <div className="application-form-textfield">
                  <TextField
                    name="name"
                    placeholder="Ваше имя"
                    variant="outlined"
                    type="text"
                    required="true"
                  />
                  <TextField
                    name="firmName"
                    placeholder="Название организации"
                    variant="outlined"
                    type="text"
                    required="true"
                  />
                </div>
                <div className="application-form-textfield">
                  <TextField
                    name="phone"
                    placeholder="Телефон"
                    variant="outlined"
                    required="true"
                  />
                  <TextField
                    name="email"
                    placeholder="E-mail"
                    variant="outlined"
                    required="true"
                    type="email"
                  />
                </div>
              </div>
              <div className="application-form-submit-info">
                <div className="application-form-checkbox">
                  <FormGroup>
                    <FormControlLabel
                      control={<Checkbox defaultChecked required="true" />}
                      label="Даю согласие на обработку персональных данных"
                    />
                  </FormGroup>
                </div>
                <Button
                  type="button"
                  onClick={sendEmail}
                  className="btn btn-form"
                >
                  Отправить
                </Button>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default ApplicationForm;
