"use client";
import Table from "./components/Table/Table";
import { ColumnType } from "./types/Table";

interface DataType {
  index: number;
  name: string;
  age: number;
  address: string;
  tags: string[];
  twitter: { twitterProfileName: string; twitterProfileUrl: string };
}

const headers: ColumnType<DataType>[] = [
  {
    title: "Index",
    dataIndex: "index",
  },
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Age",
    dataIndex: "age",
    sort: (a: any, b: any) => {
      return a.age - b.age;
    },
  },
  {
    title: "Address",
    dataIndex: "address",
  },
  {
    title: "Twitter",
    dataIndex: "twitter",
    render: ({ twitterProfileName, twitterProfileUrl }) => {
      return (
        <a style={{ color: "blue" }} href={twitterProfileUrl}>
          {twitterProfileName}
        </a>
      );
    },
  },
  {
    title: "Tags",
    dataIndex: "tags",
    render: (tags) => {
      return (
        <div>
          {tags.map((tag: any, index: any) => {
            return (
              <span
                style={{
                  margin: "0.25rem 0.5rem",
                  padding: "0.25rem 1rem",
                  outline: "1px solid black",
                  display: "inline-block",
                }}
                key={index}
              >
                {tag}
              </span>
            );
          })}
        </div>
      );
    },
  },
];

const rows: DataType[] = [
  {
    index: 1,
    name: "John Doe",
    age: 30,
    address: "123 Main Street, Anytown, CA 12345",
    tags: ["coding", "programming"],
    twitter: {
      twitterProfileName: "johndoe",
      twitterProfileUrl: "https://twitter.com/johndoe",
    },
  },
  {
    index: 2,
    name: "Jane Doe",
    age: 25,
    address: "456 Elm Street, Anytown, CA 12345",
    tags: ["ux", "ui"],
    twitter: {
      twitterProfileName: "janedoe",
      twitterProfileUrl: "https://twitter.com/janedoe",
    },
  },
  {
    index: 3,
    name: "Paul Smith",
    age: 60,
    address: "789 Oak Street, Anytown, CA 12345",
    tags: ["guitar", "poetry"],
    twitter: {
      twitterProfileName: "paulsmith",
      twitterProfileUrl: "https://twitter.com/paulsmith",
    },
  },

  {
    index: 3,
    name: "Paul Smith",
    age: 60,
    address: "789 Oak Street, Anytown, CA 12345",
    tags: ["guitar", "poetry"],
    twitter: {
      twitterProfileName: "paulsmith",
      twitterProfileUrl: "https://twitter.com/paulsmith",
    },
  },

  {
    index: 3,
    name: "Paul Smith",
    age: 60,
    address: "789 Oak Street, Anytown, CA 12345",
    tags: ["guitar", "poetry"],
    twitter: {
      twitterProfileName: "paulsmith",
      twitterProfileUrl: "https://twitter.com/paulsmith",
    },
  },

  {
    index: 3,
    name: "Paul Smith",
    age: 60,
    address: "789 Oak Street, Anytown, CA 12345",
    tags: ["guitar", "poetry"],
    twitter: {
      twitterProfileName: "paulsmith",
      twitterProfileUrl: "https://twitter.com/paulsmith",
    },
  },

  {
    index: 3,
    name: "Paul Smith",
    age: 60,
    address: "789 Oak Street, Anytown, CA 12345",
    tags: ["guitar", "poetry"],
    twitter: {
      twitterProfileName: "paulsmith",
      twitterProfileUrl: "https://twitter.com/paulsmith",
    },
  },
];

export default function Home() {
  return <Table headers={headers} rows={rows} itemsPerPage={5} />;
}

/**
 *
 * Header will be array of object
 * Header = [ {} , {} , {} , {}]
 * each object will be having this strucutre
 *
 * HeaderObj = {
 *  title => text to render (required) (string)
 *  key   => when mapping this is used as a key (not required) (string);
 *  dataIndex => this will be used to which property is used (required) (string)
 *  render => if it's not normal string , this function will tell how to render it (not required)
 *  sort  =>  on what basis to sort (not required)
 * }
 *
 *
 * // type of render function
 *
 * input => can be anything , (array , normal text , object)
 * return type => JSX.Element
 *
 *
 * // type of sort function
 *
 * input => two value
 * return type => boolean
 *
 *
 * I will make a dataType
 *
 * interface DataType {
 *  name : ""
 *  age : ""
 *  gender : ""
 * }
 *
 * I want to create a generic data type which
 * will array of object
 *
 *
 *
 */
