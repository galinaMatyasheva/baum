import React from "react";
import {
  YMaps,
  Map,
  Placemark,
  ZoomControl,
  GeolocationControl,
} from "react-yandex-maps";

import "./MapAdress.scss";

const MapAdress = () => {
  
  return (
    <div className="address-container-info">
    <div className="address-info">
      <div className="address-content">
        <h2>Мы расположены по адресам:</h2>
        <div className="address-links">
          <div className="main-container-link address-link">
            <a href="">Лаборатория</a>
          </div>
          <div className="main-container-link address-link">
            <a href="">Офис</a>
          </div>
        </div>
        <h5>Адрес лаборатории</h5>
        <p>г.Москва, Лефортовская наб., 1 Корпус</p>
        <p> Энергомашиностроения МГТУ им. Н.Э.Баумана</p>
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
          <GeolocationControl options={{ float: "right" }} />
        </Map>
      </YMaps>
    </div>
  </div>
  );
};
export default MapAdress;