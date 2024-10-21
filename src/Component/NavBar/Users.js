import { Button } from "@mui/material";
import React from "react";
import { Link, useSearchParams } from "react-router-dom";

const Users = () => {
  const [searchParam, setSearchParam] = useSearchParams({
    age: "20",
    name: "Abc",
  });
  //   console.log("age", searchParam.get("age"));
  const age = searchParam.get("age");
  const name = searchParam.get("name");
  const mystyle = {
    backgroundImage: "url('backgroundimg.jpg')",
    height: "93vh",
    padding: "50px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  const linkstyle = {
    fontSize: "1.4em",
    align: "left",
  };

  const listContainerStyle = {
    textAlign: "left",
  };
  let users = [
    { id: 1, name: "Abir", email: "abir@gmail.com" },
    { id: 2, name: "Dhruv", email: "dhruv@gmail.com" },
    { id: 3, name: "Pratyush", email: "pratyush@gmail.com" },
    { id: 4, name: "Ryka", email: "ryka@gmail.com" },
    { id: 5, name: "Sevit", email: "sevit@gmail.com" },
  ];
  const handleSetSearchParam = (key, value) => {
    const newSearchParams = new URLSearchParams(searchParam);
    newSearchParams.set(key, value);
    setSearchParam(newSearchParams);
  };
  return (
    <div style={mystyle}>
      <h1 style={{ textAlign: "left" }}>Users List</h1>

      <br />
      <div style={listContainerStyle}>
        <ul>
          {users.map((item) => (
            <li key={item.id}>
              <Link
                to={`/users/${item.name}`}
                state={{ name: item.name, email: item.email }}
                style={linkstyle}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <br />
      <h1>Use SearchParams Data:</h1>
      <br />
      <h3>Name from searchParam: {name}</h3>
      <h3>Age from searchParam: {age}</h3>

      <Button onClick={() => setSearchParam({ age: "27", name: "Madhuri" })}>
        Update Query Params
      </Button>
      <br />
      <br />
      <label>Name:</label>
      <input
        type="text"
        placeholder="set Name"
        onChange={(e) => handleSetSearchParam("name", e.target.value)}
      />
      <br />
      <label>Age:</label>
      <input
        type="text"
        placeholder="set Age"
        onChange={(e) => handleSetSearchParam("age", e.target.value)}
      />
    </div>
  );
};

export default Users;
