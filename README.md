

<div align="center">
    <h1 align="center">Reusable Table</h1>
    <p align="center">
	Reusable Tables (center) is a flexible and customizable library that provides dynamic rendering, custom sorting, and pagination features for displaying data in a tabular format using JSX. This library aims to simplify the process of creating tables with various features, making it easy to integrate into your projects.
    </p>
    <br/>
  
</div>



## Features

- **Dynamic Rendering Feature**: Easily render any type of content, whether it's an array, object, or string in JSX format, enabling you to display diverse data formats efficiently.

- **Custom Sorting Feature**: Apply hassle-free custom sorting by providing a comparator function. This empowers you to arrange data in a way that suits your specific requirements.

- **Pagination Feature**: Just provide the `itemsPerPage` variable, and pagination will be done automatically. This ensures that your tables remain organized and manageable even when dealing with large datasets.

## Upcoming Features

The following features are planned for future releases:

- **Search Feature**: Quickly search and filter data within the table, making it easier for users to find specific information.

- **Filtering Feature**: Allow users to filter data based on predefined criteria, enhancing the user experience.

- **Fetch Through API Feature**: Enable data retrieval through APIs, ensuring seamless integration with server-side data.

- **Resize Feature**: Provide the ability to resize table columns, making it easier to view and analyze different data fields.



## Example Usage

```jsx
const headers =  [
  {
    title: "Email",
    dataIndex: "email",
  },
  {
    title: "Name",
    dataIndex: "name",
  },
];


const rows= [
  {
    email: "john@example.com",
    name: "John Doe",
  },
  {
    email: "jane@example.com",
    name: "Jane Smith",
  },
  {
    email: "robert@example.com",
    name: "Robert Johnson",
  },
]

// Now use the above data just like this

<Table
	headers={headers}
	caption="Caption for the above table!"
	rows={rows}
	itemsPerPage={5}
/>