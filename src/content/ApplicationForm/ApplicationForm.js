import React from "react";
import {
  Button,
  Checkbox,
  FormGroup,
  FormControlLabel,
  TextField,
} from "@material-ui/core";

import "./ApplicationForm.scss";

const ApplicationForm = () => {
  return (
    <div className="application-form-container-info">
      <div className="application-form-img"></div>
      <div className="application-form-info">
        <form className="application-form-content">
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
                  name="firm-name"
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
                  name="mail"
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
              <Button type="submit" className="btn btn-form">
                Отправить
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ApplicationForm;
