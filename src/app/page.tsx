"use client";
import Table from "./components/Table";
import { ColumnType } from "./types/Table";

interface DataType {
  name: string;
  age: number;
  address: string;
  tags: string[];
  twitter: { twitterProfileName: string; twitterProfileUrl: string };
}

const headers: ColumnType<DataType>[] = [
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Age",
    dataIndex: "age",
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
    name: "Md Sohel",
    age: 20,
    address: "Bokaro Steel City",
    tags: ["Developer", "Learner"],
    twitter: {
      twitterProfileName: "so_hell",
      twitterProfileUrl: "https://twitter.com/iamsrk",
    },
  },
  {
    name: "Rahul Kumar",
    age: 23,
    address: "Jaipur ",
    tags: ["Developer", "Achiever"],
    twitter: {
      twitterProfileName: "ra_hul",
      twitterProfileUrl: "https://twitter.com/iamsrk",
    },
  },
  {
    name: "Manan Gupta",
    age: 20,
    address: "Delhi",
    tags: ["Developer", "Struggler"],
    twitter: {
      twitterProfileName: "mgta",
      twitterProfileUrl: "https://twitter.com/iamsrk",
    },
  },
  {
    name: "Harshil Gupta",
    age: 10,
    address: "Uttar Pradesh",
    tags: ["Developer", "Businessman"],
    twitter: {
      twitterProfileName: "harshil_03",
      twitterProfileUrl: "https://twitter.com/iamsrk",
    },
  },
  {
    name: "Harshit Chauhan",
    age: 20,
    address: "Roorkee",
    tags: ["Developer", "Small Height"],
    twitter: {
      twitterProfileName: "chauhan",
      twitterProfileUrl: "https://twitter.com/iamsrk",
    },
  },

  {
    name: "Rahul Kumar",
    age: 23,
    address: "Jaipur ",
    tags: ["Developer", "Achiever"],
    twitter: {
      twitterProfileName: "ra_hul",
      twitterProfileUrl: "https://twitter.com/iamsrk",
    },
  },
  {
    name: "Manan Gupta",
    age: 20,
    address: "Delhi",
    tags: ["Developer", "Struggler"],
    twitter: {
      twitterProfileName: "mgta",
      twitterProfileUrl: "https://twitter.com/iamsrk",
    },
  },

  {
    name: "Manan Gupta",
    age: 20,
    address: "Delhi",
    tags: ["Developer", "Struggler"],
    twitter: {
      twitterProfileName: "mgta",
      twitterProfileUrl: "https://twitter.com/iamsrk",
    },
  },
  {
    name: "Manan Gupta",
    age: 20,
    address: "Delhi",
    tags: ["Developer", "Struggler"],
    twitter: {
      twitterProfileName: "mgta",
      twitterProfileUrl: "https://twitter.com/iamsrk",
    },
  },
  {
    name: "Harshil Gupta",
    age: 10,
    address: "Uttar Pradesh",
    tags: ["Developer", "Businessman"],
    twitter: {
      twitterProfileName: "harshil_03",
      twitterProfileUrl: "https://twitter.com/iamsrk",
    },
  },
  {
    name: "Harshit Chauhan",
    age: 20,
    address: "Roorkee",
    tags: ["Developer", "Small Height"],
    twitter: {
      twitterProfileName: "chauhan",
      twitterProfileUrl: "https://twitter.com/iamsrk",
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
