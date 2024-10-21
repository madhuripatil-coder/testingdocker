import React, { useContext } from "react";
import { data } from "./../App.js";

export default function UseContextExample() {
  const Name = useContext(data);
  // console.log("Name is", Name);
  return (
    <>
      <h1>UseContext Example in Function Component</h1>
      <h2> Name given from Parent as prop </h2>
      <h3>Name: {Name}</h3>
      <br />
      <br />
      --------------------
    </>
  );
}
