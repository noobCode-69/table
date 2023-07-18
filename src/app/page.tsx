"use client";
import Table from "./components/Table";
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
      return <a href={twitterProfileUrl}>{twitterProfileName}</a>;
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
              <span style={{ color: "red" }} key={index}>
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
    name: "Md Sohel",
    age: 1,
    address: "Bokaro Steel City",
    tags: ["Developer", "Learner"],
    twitter: {
      twitterProfileName: "so_hell",
      twitterProfileUrl: "https://twitter.com/",
    },
  },
  {
    index: 2,
    name: "Rahul Kumar",
    age: 2,
    address: "Jaipur ",
    tags: ["Developer", "Achiever"],
    twitter: {
      twitterProfileName: "ra_hul",
      twitterProfileUrl: "https://twitter.com/",
    },
  },
  {
    index: 3,
    name: "Manan Gupta",
    age: 3,
    address: "Delhi",
    tags: ["Developer", "Struggler"],
    twitter: {
      twitterProfileName: "mgta",
      twitterProfileUrl: "https://twitter.com/",
    },
  },
  {
    index: 4,
    name: "Harshil Gupta",
    age: 4,
    address: "Uttar Pradesh",
    tags: ["Developer", "Businessman"],
    twitter: {
      twitterProfileName: "harshil_03",
      twitterProfileUrl: "https://twitter.com/",
    },
  },
  {
    index: 5,
    name: "Harshit Chauhan",
    age: 5,
    address: "Roorkee",
    tags: ["Developer", "Small Height"],
    twitter: {
      twitterProfileName: "chauhan",
      twitterProfileUrl: "https://twitter.com/",
    },
  },

  {
    index: 6,
    name: "Rahul Kumar",
    age: 6,
    address: "Jaipur ",
    tags: ["Developer", "Achiever"],
    twitter: {
      twitterProfileName: "ra_hul",
      twitterProfileUrl: "https://twitter.com/",
    },
  },
  {
    index: 7,
    name: "Manan Gupta",
    age: 7,
    address: "Delhi",
    tags: ["Developer", "Struggler"],
    twitter: {
      twitterProfileName: "mgta",
      twitterProfileUrl: "https://twitter.com/",
    },
  },

  {
    index: 8,
    name: "Manan Gupta",
    age: 8,
    address: "Delhi",
    tags: ["Developer", "Struggler"],
    twitter: {
      twitterProfileName: "mgta",
      twitterProfileUrl: "https://twitter.com/",
    },
  },
  {
    index: 9,
    name: "Manan Gupta",
    age: 9,
    address: "Delhi",
    tags: ["Developer", "Struggler"],
    twitter: {
      twitterProfileName: "mgta",
      twitterProfileUrl: "https://twitter.com/",
    },
  },
  {
    index: 10,
    name: "Harshil Gupta",
    age: 10,
    address: "Uttar Pradesh",
    tags: ["Developer", "Businessman"],
    twitter: {
      twitterProfileName: "harshil_03",
      twitterProfileUrl: "https://twitter.com/",
    },
  },
  {
    index: 11,
    name: "Harshit Chauhan",
    age: 11,
    address: "Roorkee",
    tags: ["Developer", "Small Height"],
    twitter: {
      twitterProfileName: "chauhan",
      twitterProfileUrl: "https://twitter.com/",
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
