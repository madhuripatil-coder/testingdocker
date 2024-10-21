import React, { useEffect, useState } from "react";

export default function UseEffectExample() {
  const [count, setcounter] = useState(0);
  const [count1, setCount1] = useState(100);

  useEffect(() => {
    console.log("useEffect called with every render");
  });

  useEffect(() => {
    console.log("component is mounting just once");
  }, []);

  useEffect(() => {
    console.log("Second count got updated");
  }, [count1]);

  return (
    <>
      <h1>UseEffect Example in Function Component</h1>
      <h2>Updated Count: {count}</h2>
      <button
        onClick={() => {
          setcounter(count + 1);
        }}
      >
        Update Count
      </button>
      <h2>Updated second count:{count1}</h2>
      <button
        onClick={() => {
          setCount1(count1 + 2);
        }}
      >
        Update second count
      </button>
      <br />
    </>
  );
}
