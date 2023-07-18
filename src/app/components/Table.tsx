import React, { useEffect, useMemo, useState } from "react";
import { ColumnType } from "../types/Table";

interface TableProps<> {
  headers: ColumnType<any>[];
  rows: any[];
  itemsPerPage: number;
}

const Table: React.FC<TableProps> = ({
  headers,
  rows: propRows,
  itemsPerPage,
}) => {
  const getInitalItemsToRender = (rows: any[], itemsPerPage: number) => {
    if (rows.length <= itemsPerPage) {
      return [...rows];
    }
    return [...rows.slice(0, itemsPerPage)];
  };

  const [currPage, setCurrPage] = useState(1);

  const [rows, setRows] = useState(propRows);

  const [currSortingOrder, setCurrentSortingOrder] = useState<{
    [key: string]: string;
  }>({});

  const [itemsToRender, setItemsToRender] = useState(() =>
    getInitalItemsToRender(rows, itemsPerPage)
  );

  const lastPage = useMemo(() => {
    return Math.ceil(rows.length / itemsPerPage);
  }, [rows.length, itemsPerPage]);

  useEffect(() => {
    if (rows.length <= itemsPerPage) {
      return setItemsToRender([...rows]);
    }
    const startIndex = (currPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    setItemsToRender([...rows.slice(startIndex, endIndex)]);
  }, [currPage, itemsPerPage, rows]);

  useEffect(() => {
    const comparator = Object.entries(currSortingOrder).map(([key, value]) => {
      const dataObject = headers.find((obj) => obj.dataIndex === key);
      return dataObject ? dataObject.sort : undefined;
    })[0];

    if (!comparator) {
      return;
    }

    if (Object.values(currSortingOrder)[0] == "NORMAL") {
      setRows(propRows);
    } else if (Object.values(currSortingOrder)[0] == "ASC") {
      const sortedOrder = [...propRows].sort(comparator);
      setRows(sortedOrder);
    } else {
      const sortedOrder = [...propRows].sort(comparator).reverse();
      setRows(sortedOrder);
    }
  }, [currSortingOrder, headers, rows, propRows]);

  return (
    <div>
      <table>
        <thead>
          <tr>
            {headers.map((header, index) => {
              const { title, dataIndex, sort } = header;
              if (sort) {
                const order = currSortingOrder[dataIndex] || "NORMAL";
                let nextOrder = "";
                if (order == "NORMAL") {
                  nextOrder = "ASC";
                } else if (order == "ASC") {
                  nextOrder = "DESC";
                } else if (order == "DESC") {
                  nextOrder = "NORMAL";
                }
                return (
                  <th
                    onClick={() =>
                      setCurrentSortingOrder({ [dataIndex]: nextOrder })
                    }
                    key={index}
                  >
                    {title} : {order}
                  </th>
                );
              }
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

export default Table;
