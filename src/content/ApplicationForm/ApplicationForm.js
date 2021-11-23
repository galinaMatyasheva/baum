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
          <h2>Оставьте заявку и мы с вами свяжемся!</h2>
          <div className="application-form-content-info">
            <div className="application-form-textfields">
              <div className="application-form-textfield">
                <TextField
                  name="name"
                  placeholder="Ваше имя"
                  variant="outlined"
                  type="text"
                />
                <TextField
                  name="firm-name"
                  placeholder="Название организации"
                  variant="outlined"
                  type="text"
                />
              </div>
              <div className="application-form-textfield">
                <TextField
                  name="phone"
                  placeholder="Телефон"
                  variant="outlined"
                />
                <TextField
                  name="mail"
                  placeholder="E-mail"
                  variant="outlined"
                />
              </div>
            </div>
            <div className="application-form-submit-info">
              <div className="application-form-checkbox">
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label="Даю согласие на обработку персональных данных"
                  />
                </FormGroup>
              </div>
              <Button type="submit" variant="outlined">
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
