import React, { useEffect, useState } from "react";

export default function UseEffectSec() {
  const [data, setdata] = useState("Abc");
  const [data1, setdata1] = useState("Abc@gmail.com");

  useEffect(() => {
    console.log("useEffect called with every render");
  });

  useEffect(() => {
    console.log("component is mounting just once");
  }, []);

  useEffect(() => {
    console.log("data got updated");
  }, [data]);

  return (
    <>
      <h1>UseEffect second Example in Function Component</h1>
      <h2>Updated data: {data}</h2>
      <button
        onClick={() => {
          setdata("Madhuri");
        }}
      >
        Update Data
      </button>
      <h2>Updated Second Data:{data1}</h2>
      <button
        onClick={() => {
          setdata1("Madhuri@gmail.com");
        }}
      >
        Update second Data
      </button>
      <br />
    </>
  );
}
