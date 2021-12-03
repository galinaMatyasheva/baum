import React, { useState } from "react";
import {
  YMaps,
  Map,
  Placemark,
  ZoomControl,
  GeolocationControl,
  TrafficControl
} from "react-yandex-maps";
import { Button } from "@material-ui/core";

import "./MapAdress.scss";
import { display } from "@mui/system";

const MapAdress = () => {
  const [isAddress, setIsAddress] = useState("Lab");

  const onClickAdressLab = () => {
    setIsAddress("Lab");
  };

  const onClickAddressOffice = () => {
    setIsAddress("Office");
  };

  return (
    <div className="address-container-info">
      <div className="address-info">
        <div className="address-content">
          <h2>Мы расположены по адресам:</h2>
          <div className="address-links">
            <Button className="btn btn-green" onClick={onClickAdressLab}>
              Лаборатория
            </Button>
            <Button className="btn btn-light" onClick={onClickAddressOffice}>
              Офис
            </Button>
          </div>
          {isAddress === "Lab" ? (
            <div className="address-lab">
              <h5>Адрес лаборатории</h5>
              <p>г.Москва, Лефортовская наб., 1 Корпус</p>
              <p> Энергомашиностроения МГТУ им. Н.Э.Баумана</p>
              <p>Лаборатория</p>
            </div>
          ) : (
            <div>
              <h5 className="address-office">Адрес офиса</h5>
              <p>г.Москва, Бауманская 68/8 с1</p>
              <p>Телефон: +7 495 249-11-13</p>
              <p>E-mail: info@baum-inform.ru</p>
            </div>
          )}
        </div>
      </div>
      <div className="address-info">
        <YMaps className="address-info">
          <Map
            width="100%"
            height="100%"
            defaultState={{
              center: [55.7688, 37.689734],
              zoom: 16,
              controls: [],
            }}
          >
            <Placemark geometry={[55.7688, 37.689734]} />
            <ZoomControl
              options={{
                float: "right",
                position: {
                  top: "108px",
                  right: "10px",
                  bottom: "auto",
                  left: "auto",
                },
              }}
            />
               <TrafficControl options={{ float: 'right' }} />
            <GeolocationControl options={{ float: "right" }} />
          </Map>
        </YMaps>
      </div>
    </div>
  );
};
export default MapAdress;
