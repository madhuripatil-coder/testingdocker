import React from "react";
import DisplayCounter from "./DisplayCounter";

const NestedCounter = ({ count, onIncrement }) => {
  return (
    <div>
      <h1>NestedCounter</h1>
      <DisplayCounter count={count} onIncrement={onIncrement} />
    </div>
  );
};

export default NestedCounter;
