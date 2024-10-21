import React from "react";

const DisplayCounter = ({ count, onIncrement }) => {
  return (
    <div>
      <h1>DisplayCounter</h1>
      <h3>Count: {count}</h3>
      <button onClick={onIncrement}>Increment</button>
      <hr />
      <hr />
    </div>
  );
};

export default DisplayCounter;
