import React, { useRef, useState } from "react";
import {
  Checkbox,
  Button,
  FormGroup,
  FormControlLabel,
  TextField,
  TextareaAutosize,
} from "@material-ui/core";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import emailjs from "emailjs-com";

import "./Form.scss";
import logo from "../../assets/form/logo.svg"

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
      <div className="form-img form-info">
        <div className="img">
          <img src={logo} alt="img"/>
        </div>
      </div>
      <div className="form-info">
        {showEmailSuccess ? (
          <h1 className="form-container-message-success">
            Ваше сообщение отправлено успешно!
          </h1>
        ) : (
          <form className="form-content" ref={form}>
            <h3>Остались вопросы? Свяжитесь с нами!</h3>
            <div className="form-textfields">
              <div className="textfield">
                <TextField
                  name="name"
                  placeholder="Ваше имя"
                  variant="outlined"
                  type="text"
                  required
                />
                <TextField
                  name="firmName"
                  placeholder="Название организации"
                  variant="outlined"
                  type="text"
                  required
                />
              </div>
              <div className="textfield">
                <TextField
                  name="phone"
                  placeholder="Телефон"
                  variant="outlined"
                  required
                />
                <TextField
                  required
                  type="email"
                  name="email"
                  placeholder="E-mail"
                  variant="outlined"
                />
              </div>
              <TextareaAutosize
                name="message"
                // minRows={1.5}
                placeholder="Текст сообщения"
                style={{ width: "100%" }}
                required
              />
            </div>
            <div className="form-submit-info">
              <div className="form-checkbox">
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        defaultChecked
                        color="default"
                        required="true"
                      />
                    }
                    label="Даю согласие на обработку персональных данных"
                  />
                </FormGroup>
              </div>
            </div>
            <div className="form-btn">
              <Button
                type="button"
                endIcon={<ArrowRightAltIcon />}
                onClick={sendEmail}
                className="btn btn-outlined-light-border"
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
