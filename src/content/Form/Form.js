import React, { useRef, useState } from "react";
import {
  Checkbox,
  Button,
  FormGroup,
  FormControlLabel,
  TextField,
  TextareaAutosize,
} from "@material-ui/core";
import emailjs from "emailjs-com";

import "./Form.scss";

const Form = () => {
  const [showEmailSuccess, setShowEmailSuccess] = useState(false);
  const form = useRef();

  const sendEmail = () => {
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
          setShowEmailSuccess(true);
        },
        function (error) {
          console.log("FAILED...", error);
        }
      );
  };

  return (
    <div className="form-container-info">
      <div className="form-img form-info"></div>
      <div className="form-info">
        {showEmailSuccess ? (
          <h1>Ваше сообщение отправлено успешно!</h1>
        ) : (
          <form className="form-content" ref={form}>
            <h2>Остались вопросы? Свяжитесь с нами!</h2>
            <div className="form-textfields">
              <div className="textfield">
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
              <div className="textfield">
                <TextField
                  name="phone"
                  placeholder="Телефон"
                  variant="outlined"
                  required="true"
                />
                <TextField
                  required="true"
                  type="email"
                  name="email"
                  placeholder="E-mail"
                  variant="outlined"
                />
              </div>
              <TextareaAutosize
                name="message"
                minRows={1.5}
                placeholder="Текст сообщения"
                style={{ width: "100%" }}
                required="true"
              />
            </div>
            <div className="form-submit-info">
              <div className="form-checkbox">
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
          </form>
        )}
      </div>
    </div>
  );
};
export default Form;
