import React from "react";
import "./table.css";

const Tabledata = ({ tableData, columnName }) => {
  return (
    <table>
      <thead>
        <tr>
          {columnName.map((head) => (
            <th>{head.field}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {tableData.map((row) => (
          <tr>
            {columnName.map((col) => (
              <td>{row[col.field]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

module.exports = Tabledata;
