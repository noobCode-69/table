"use client";
import "./page.css";
import Table from "./components/Table/Table";
import { ColumnType } from "./types/Table";

interface DataType {
  timestamp: string;
  purchaseId: number;
  email: string;
  name: string;
  status: "Failed" | "Waiting" | "Paid";
}

const headers: ColumnType<DataType>[] = [
  {
    title: "Timestamp",
    dataIndex: "timestamp",
    sort: (a: any, b: any): number => {
      const date1 = new Date(a.timestamp);
      const date2 = new Date(b.timestamp);
      if (date1 < date2) {
        return -1;
      } else if (date1 > date2) {
        return 1;
      } else {
        return 0;
      }
    },
  },
  {
    title: "Purchase Id",
    dataIndex: "purchaseId",
  },
  {
    title: "Email",
    dataIndex: "email",
  },
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Status",
    dataIndex: "status",
    render: (status) => {
      const colors: { [key: string]: string } = {
        Failed: "#ffb3b3",
        Paid: "#a8f1c6",
        Waiting: "#ffd38a",
      };

      return (
        <span
          style={{
            display: "inline-block",
            padding: "0.25rem 1rem",
            margin: "0.25rem",
            borderRadius: "100rem",

            backgroundColor: colors[status],
          }}
        >
          {status}
        </span>
      );
    },
  },
];

const rows: DataType[] = [
  {
    timestamp: "2023-08-19T10:30:00",
    purchaseId: 1,
    email: "john@example.com",
    name: "John Doe",
    status: "Paid",
  },
  {
    timestamp: "2023-07-09T11:15:00",
    purchaseId: 2,
    email: "jane@example.com",
    name: "Jane Smith",
    status: "Waiting",
  },
  {
    timestamp: "2023-07-20T12:00:00",
    purchaseId: 3,
    email: "robert@example.com",
    name: "Robert Johnson",
    status: "Failed",
  },
  {
    timestamp: "2023-07-19T13:45:00",
    purchaseId: 4,
    email: "sarah@example.com",
    name: "Sarah Thompson",
    status: "Paid",
  },
  {
    timestamp: "2023-05-19T14:30:00",
    purchaseId: 5,
    email: "david@example.com",
    name: "David Lee",
    status: "Waiting",
  },
  {
    timestamp: "2022-07-19T15:15:00",
    purchaseId: 6,
    email: "emily@example.com",
    name: "Emily Wilson",
    status: "Paid",
  },
  {
    timestamp: "2022-07-19T16:00:00",
    purchaseId: 7,
    email: "andrew@example.com",
    name: "Andrew Davis",
    status: "Waiting",
  },
  {
    timestamp: "2023-07-22T16:45:00",
    purchaseId: 8,
    email: "olivia@example.com",
    name: "Olivia Baker",
    status: "Paid",
  },
  {
    timestamp: "2023-07-25T17:30:00",
    purchaseId: 9,
    email: "christopher@example.com",
    name: "Christopher Turner",
    status: "Waiting",
  },
  {
    timestamp: "2023-07-26T18:15:00",
    purchaseId: 10,
    email: "amanda@example.com",
    name: "Amanda Clark",
    status: "Paid",
  },
  {
    timestamp: "2023-07-27T19:00:00",
    purchaseId: 11,
    email: "matthew@example.com",
    name: "Matthew Roberts",
    status: "Waiting",
  },
  {
    timestamp: "2023-07-28T19:45:00",
    purchaseId: 12,
    email: "sophia@example.com",
    name: "Sophia Evans",
    status: "Paid",
  },
  {
    timestamp: "2023-07-19T20:30:00",
    purchaseId: 13,
    email: "jacob@example.com",
    name: "Jacob Nelson",
    status: "Waiting",
  },
  {
    timestamp: "2023-06-19T21:15:00",
    purchaseId: 14,
    email: "grace@example.com",
    name: "Grace Thompson",
    status: "Paid",
  },
  {
    timestamp: "2023-05-19T22:00:00",
    purchaseId: 15,
    email: "ethan@example.com",
    name: "Ethan Morris",
    status: "Waiting",
  },
  {
    timestamp: "2023-04-19T22:45:00",
    purchaseId: 16,
    email: "lily@example.com",
    name: "Lily Rodriguez",
    status: "Paid",
  },
  {
    timestamp: "2023-03-19T23:30:00",
    purchaseId: 17,
    email: "daniel@example.com",
    name: "Daniel Foster",
    status: "Waiting",
  },
  {
    timestamp: "2023-01-20T00:15:00",
    purchaseId: 18,
    email: "samantha@example.com",
    name: "Samantha Price",
    status: "Paid",
  },
];

export default function Home() {
  return (
    <div className="container">
      <h1 className="title">Reusable Tables</h1>
      <div className="table-wrapper">
        <Table
          headers={headers}
          caption="Caption for the above table!"
          rows={rows}
          itemsPerPage={5}
        />
      </div>
      <div className="features">
        <h1 className="subtitle">Features</h1>
        <ul className="feature-list">
          <li>
            <span className="feature-title">Dynamic Rendering Feature</span>:
            You can render any type of content, be it an array, object, or
            string in JSX format.
          </li>
          <li>
            <span className="feature-title">Custom Sorting Feature</span>: You
            can apply the sorting feature hassle-free just by providing a
            comparator.
          </li>
          <li>
            <span className="feature-title">Pagination Feature</span>: Just
            provide the `itemsPerPage` variable, and pagination
            will be done.
          </li>
        </ul>
      </div>

      <div className="upcoming-features">
        <h1 className="subtitle">Upcoming Features</h1>
        <ul className="feature-list">
          <li>
            <span className="feature-title">Search Feature</span>
          </li>
          <li>
            <span className="feature-title">Filtering Feature</span>
          </li>
          <li>
            <span className="feature-title">Fetch Through API Feature</span>
          </li>
          <li>
            <span className="feature-title">Resize Feature</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
