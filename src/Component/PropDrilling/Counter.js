import React, { useState } from "react";
import NestedCounter from "./NestedCounter";

const Counter = () => {
  const [count, setCount] = useState(0);

  const onIncrement = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Counter App</h1>
      <h3>Count: {count}</h3>
      <NestedCounter count={count} onIncrement={onIncrement} />
    </div>
  );
};

export default Counter;
