import React, { useEffect, useMemo, useState } from "react";
import { ColumnType } from "../types/Table";

interface TableProps<> {
  headers: ColumnType<any>[];
  rows: any[];
  itemsPerPage: number;
}

const Table: React.FC<TableProps> = ({ headers, rows, itemsPerPage }) => {
  const [currPage, setCurrPage] = useState(1);

  const getInitalItemsToRender = (rows: any[], itemsPerPage: number) => {
    if (rows.length <= itemsPerPage) {
      return [...rows];
    }
    return rows.slice(0, itemsPerPage);
  };

  const lastPage = useMemo(() => {
    return Math.ceil(rows.length / itemsPerPage);
  }, [rows, itemsPerPage]);

  const [itemsToRender, setItemsToRender] = useState(() =>
    getInitalItemsToRender(rows, itemsPerPage)
  );

  useEffect(() => {
    if (rows.length <= itemsPerPage) {
      return setItemsToRender(rows);
    }
    const startIndex = (currPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    setItemsToRender(rows.slice(startIndex, endIndex));
  }, [currPage, itemsPerPage, rows]);

  return (
    <div>
      <table>
        <thead>
          <tr>
            {headers.map((header, index) => {
              const { title } = header;
              return <th key={index}>{title}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {itemsToRender.map((row, rowIndex) => (
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
      <div>
        <button
          disabled={currPage === 1}
          onClick={() => setCurrPage(currPage - 1)}
        >
          Prev
        </button>
        <button
          disabled={currPage === lastPage}
          onClick={() => setCurrPage(currPage + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

// currPage * itemsPerPage >= rows

export default Table;
