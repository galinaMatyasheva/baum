import React from "react";

import "./TableSoftware.scss";

const TableSoftware = ({ dataSoftware }) => {
  return (
    <div className="model-wrap">
    <div className="table-container">
      <div className="table-title">
        <h2>Свидетельства ЭВМ ООО "БАУМ-Информ"</h2>
      </div>

      {dataSoftware.tableProperties.map((item) => (
        <div className="table-row-software">
          <div className="table-column-software table-coumn-value">
            <p>{item.certificateNumber}</p>
          </div>
          <div className="table-column-software table-column-property">
            <p>{item.name}</p>
          </div>
          <div className="table-column-software table-column-property">
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};
export default TableSoftware;