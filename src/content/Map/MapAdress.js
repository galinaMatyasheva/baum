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

const MapAdress = () => {
  const [address, setAddress] = useState("Lab");

  const onClickAdressLab = () => {
    setAddress("Lab");
  };

  const onClickAddressOffice = () => {
    setAddress("Office");
  };

  return (
    <div className="address-container-info">
      <div className="address-info">
        <div className="address-content">
          <h3>Мы расположены по адресам:</h3>
          <div className="address-links">
            <Button className={address === "Lab" ? "btn btn-dark-gray" : "btn btn-gray"} onClick={onClickAdressLab}>
              Лаборатория
            </Button>
            <Button className={address === "Lab" ? "btn btn-gray" : "btn btn-dark-gray"} onClick={onClickAddressOffice}>
              Офис
            </Button>
          </div>
          {address === "Lab" ? (
            <div className="address-lab">
              <h5>Адрес лаборатории</h5>
              <p>г.Москва, Бауманская 68/8 с1</p>
              <p>E-mail: info@baum-inform.ru</p>
              <p>Лаборатория</p>
            </div>
          ) : (
            <div className="address-office">
              <h5 >Адрес офиса</h5>
              <p>г.Москва, Бауманская 68/8 с1</p>
              <p>Телефон: +7 (962) 366-60-91</p>
              <p>Офис</p>
            </div>
          )}
          <h5>ООО "БАУМ-Информ"</h5>
          <p>ИНН: 9701057516</p>
          <p>КПП: 770101001</p>
          <p>ОГРН: 5167746407626</p>
          <p>ОКПО: 05853411</p>
        </div>
      </div>
      <div className="address-info">
        <YMaps className="address-info">
          <Map
            width="100%"
            height="100%"
            state={{
              // center: address === "Lab" ? [55.7688, 37.689734] : [55.765174, 37.679565],
              center: [55.765174, 37.679565],
              zoom: 16,
              controls: [],
            }}
          >
            <Placemark geometry={[55.765174, 37.679565]} />
            {/* <Placemark geometry={address === "Lab" ? [55.7688, 37.689734] : ([55.765174, 37.679565])} /> */}
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
