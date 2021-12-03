import React from "react";
import {
  Checkbox,
  Button,
  FormGroup,
  FormControlLabel,
  TextField,
  TextareaAutosize,
} from "@material-ui/core";

import "./Form.scss";

const Form = () => {
  return (
    <div className="form-container-info">
      <div className="form-img form-info"></div>
      <div className="form-info">
        <form className="form-content">
          <h2>Остались вопросы? Свяжитесь с нами!</h2>
          <div className="form-textfields">
            <div className="textfield">
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
            <div className="textfield">
              <TextField
                name="phone"
                placeholder="Телефон"
                variant="outlined"
              />
              <TextField name="mail" placeholder="E-mail" variant="outlined" />
            </div>
            <TextareaAutosize
              name="message"
              minRows={1.5}
              placeholder="Текст сообщения"
              style={{ width: "100%" }}
            />
          </div>
          <div className="form-submit-info">
            <div className="form-checkbox">
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="Даю согласие на обработку персональных данных"
                />
              </FormGroup>
            </div>
            <Button type="submit" className="btn btn-form">
              Отправить
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Form;
