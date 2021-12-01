import React from "react";

import "./TableModel.scss";

const TableModel = ({ data }) => {
  return (
    <div className="table-container">
      <div className="table-title">
        <h1>{data.tableName}</h1>
        <p>Характеристики</p>
      </div>

      {data.tableProperties.map((item) => (
        <div className="table-row">
          <div className="table-column table-column-property">
            <p>{item.property}</p>
          </div>
          <div className="table-column table-coumn-value">
            <p>{item.value}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
export default TableModel;
