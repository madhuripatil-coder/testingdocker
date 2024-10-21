import React from "react";
import Child from "./Child";

const Parent = (props) => {
  const { name } = props;
  return (
    <div>
      <h1>Parent component</h1>
      <Child name={name} />
    </div>
  );
};

export default Parent;
