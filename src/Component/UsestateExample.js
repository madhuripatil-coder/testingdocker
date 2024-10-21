import React, { useState } from "react";

function UsestateExample() {
  const [count, setCount] = useState(0);
  const [userdata, setUserdata] = useState({
    Username: "Madhuri Patil",
    Email: "madhuri@gmail.com",
    Address: "Pune",
  });
  return (
    <>
      <h1>UseState Example in Function Component</h1>
      <h2>Count is:{count}</h2>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment Count
      </button>
      <button
        onClick={() => {
          if (count === 0) {
            return;
          }
          setCount(count - 1);
        }}
      >
        Decrement Count
      </button>
      <br />
      <br />
      <br />
      ----------------
      <br />
      <br />
      <h2> User Details are given below:</h2>
      <h3> Username: {userdata.Username}</h3>
      <h3> Email: {userdata.Email}</h3>
      <h3> Address: {userdata.Address}</h3>
      <button
        onClick={() => {
          setUserdata((prevdata) => ({ ...prevdata, Address: "Bangalore" }));
        }}
      >
        Update data
      </button>
    </>
  );
}
export default UsestateExample;
