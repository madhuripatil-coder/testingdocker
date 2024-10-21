import React, { useCallback, useState } from "react";
import ChildA from "./ChildA";

const UseCallbackExample = () => {
  const [add, setAdd] = useState(0);
  const [count, setCount] = useState(0);
  const Learning = useCallback(() => {
    //operation
  }, [count]);
  return (
    <>
      <h1>UseCallback Hook in React</h1>
      <ChildA Learning={Learning} count={count} />
      <h2>{add}</h2>
      <button
        onClick={() => {
          setAdd(add + 1);
        }}
      >
        Addition
      </button>
      <h2>{count}</h2>
      <button
        onClick={() => {
          setCount(count + 2);
        }}
      >
        Count
      </button>
    </>
  );
};

export default UseCallbackExample;
