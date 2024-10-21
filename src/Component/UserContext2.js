import React, { useContext } from "react";
import { data1 } from "../App";

export default function UserContext2() {
  const Userdata = useContext(data1);
  return (
    <>
      <h2>UseContext Example</h2>
      <h3>Userdata is given from parent:</h3>
      <h3>UserName: {Userdata.Name}</h3>
      <h3>Email: {Userdata.Email}</h3>

      <br />
      <br />
    </>
  );
}
