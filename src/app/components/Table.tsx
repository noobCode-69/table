import React from "react";
import { ColumnType } from "../types/Table";

interface TableProps<> {
  headers: ColumnType<any>[];
  rows: any[];
}

const Table: React.FC<TableProps> = ({ headers, rows }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            {headers.map((header, index) => {
              const { title, dataIndex } = header;
              return <th key={index}>{title}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {headers.map((header, colIndex) => {
                const { dataIndex, render } = header;
                if (render) {
                  return <td key={colIndex}>{render(row[dataIndex])}</td>;
                }
                return <td key={colIndex}>{row[dataIndex]}</td>;
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
