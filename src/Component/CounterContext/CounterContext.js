import React, { createContext, useState } from "react";
import NestedCounter from "./NestedCounter";
export const counter = createContext();
const CounterContext = () => {
  const [count, setCount] = useState(0);

  const onIncrement = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h1>Counter From useContext</h1>
      <h3>Count:{count}</h3>
      <counter.Provider value={{ count, onIncrement }}>
        <NestedCounter />
      </counter.Provider>
    </div>
  );
};

export default CounterContext;
