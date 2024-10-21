import React, { useContext } from "react";
import { counter } from "./CounterContext";

const DisplayCounter = () => {
  const { count, onIncrement } = useContext(counter);
  return (
    <div>
      <h1>DisplayCounter</h1>
      <h3>Count: {count}</h3>
      <button onClick={onIncrement}>Increment</button>
    </div>
  );
};

export default DisplayCounter;
