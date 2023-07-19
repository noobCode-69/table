import "./Table.css";
import React, { useEffect, useMemo, useState } from "react";
import { ColumnType } from "../../types/Table";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Button,
  Box,
  Text,
} from "@chakra-ui/react";

import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { BsThreeDots } from "react-icons/bs";

import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({});
enum SortingOrder {
  Normal = "NORMAL",
  Ascending = "ASC",
  Descending = "DESC",
}

interface TableProps<T> {
  headers: ColumnType<T>[];
  rows: T[];
  itemsPerPage: number;
  caption?: string;
}

const TableComponent: React.FC<TableProps<any>> = ({
  headers,
  rows: initialRows,
  itemsPerPage,
  caption,
}) => {
  const getInitialItemsToRender = (rows: any[], itemsPerPage: number) => {
    if (rows.length <= itemsPerPage) {
      return [...rows];
    }
    return [...rows.slice(0, itemsPerPage)];
  };

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [sortingOrder, setSortingOrder] = useState<{
    [key: string]: SortingOrder;
  }>({});

  const [itemsToRender, setItemsToRender] = useState<any[]>(() =>
    getInitialItemsToRender(initialRows, itemsPerPage)
  );

  const sortedRows = useMemo(() => {
    const comparator = Object.entries(sortingOrder).map(([key, value]) => {
      const column = headers.find((column) => column.dataIndex === key);
      return column ? column.sort : undefined;
    })[0];

    if (!comparator) {
      return initialRows;
    }

    if (Object.values(sortingOrder)[0] === SortingOrder.Normal) {
      return initialRows;
    } else if (Object.values(sortingOrder)[0] === SortingOrder.Ascending) {
      return [...initialRows].sort(comparator);
    } else {
      return [...initialRows].sort(comparator).reverse();
    }
  }, [sortingOrder, headers, initialRows]);

  useEffect(() => {
    if (sortedRows.length <= itemsPerPage) {
      setItemsToRender([...sortedRows]);
    } else {
      const startIndex = (currentPage - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      setItemsToRender([...sortedRows.slice(startIndex, endIndex)]);
    }
  }, [currentPage, itemsPerPage, sortedRows]);

  const lastPage = useMemo(() => {
    return Math.ceil(initialRows.length / itemsPerPage);
  }, [initialRows.length, itemsPerPage]);

  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <Box className="form" overflowX="auto">
        <Table
          variant={"striped"}
          size={"sm"}
          __css={{
            "table-layout": "fixed",
            width: "full",
          }}
          width={"100%"}
        >
          <Thead>
            <Tr>
              {headers.map((column, index) => {
                const { title, dataIndex, sort } = column;
                if (sort) {
                  const order = sortingOrder[dataIndex] || SortingOrder.Normal;
                  let nextOrder: SortingOrder;
                  if (order === SortingOrder.Normal) {
                    nextOrder = SortingOrder.Ascending;
                  } else if (order === SortingOrder.Ascending) {
                    nextOrder = SortingOrder.Descending;
                  } else {
                    nextOrder = SortingOrder.Normal;
                  }
                  return (
                    <Th
                      onClick={() =>
                        setSortingOrder({ [dataIndex]: nextOrder })
                      }
                      __css={{
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                      }}
                      className="sortable-column"
                      key={index}
                    >
                      {title}

                      <Box
                        __css={{
                          display: "flex",
                          alignItems: "center",
                          marginLeft: "auto",
                        }}
                      >
                        {order == SortingOrder.Ascending && <IoIosArrowUp />}
                        {order == SortingOrder.Normal && <BsThreeDots />}
                        {order == SortingOrder.Descending && <IoIosArrowDown />}
                      </Box>
                    </Th>
                  );
                }
                return (
                  <Th __css={{ width: "100%" }} key={index}>
                    {title}
                  </Th>
                );
              })}
            </Tr>
          </Thead>
          <Tbody>
            {itemsToRender.map((row, rowIndex) => (
              <Tr key={rowIndex}>
                {headers.map((column, colIndex) => {
                  const { dataIndex, render } = column;
                  if (render) {
                    return <Td key={colIndex}>{render(row[dataIndex])}</Td>;
                  }
                  return <Td key={colIndex}>{row[dataIndex]}</Td>;
                })}
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
      <Box className="metadata" width="100%">
        {caption && (
          <Box className="caption">
            <Text fontSize={"sm"}>*{caption}</Text>
          </Box>
        )}

        <Box className="pagination">
          <Button
            isDisabled={currentPage === 1}
            size={"sm"}
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            Prev
          </Button>
          <Button
            isDisabled={currentPage === lastPage}
            onClick={() => setCurrentPage(currentPage + 1)}
            size={"sm"}
          >
            Next
          </Button>
        </Box>
      </Box>
    </ChakraProvider>
  );
};

export default TableComponent;
