import React, { useMemo, useState } from "react";

const UseMemoExample = () => {
  const [count, setCount] = useState(0);
  const [item, setItem] = useState(10);

  const multiCountMemo = useMemo(
    function multiCount() {
      console.log("multicount function called");
      return count * 5;
    },
    [count]
  );
  return (
    <>
      <h1>UseMemo Hook in React</h1>
      <h2>Count:{count}</h2>
      <h2>Item:{item}</h2>
      <h2>multicount:{multiCountMemo}</h2>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Update Count
      </button>
      <button
        onClick={() => {
          setItem(item * 10);
        }}
      >
        Update Item
      </button>
      <br />
      <br />
      <hr></hr>
    </>
  );
};

export default UseMemoExample;
