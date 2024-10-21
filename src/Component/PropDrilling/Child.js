import React from "react";

const Child = (props) => {
  const { name } = props;
  return (
    <div>
      <h1>Child component</h1>
      <h3> hello, my name is: {name}</h3>

      <hr />
    </div>
  );
};

export default Child;
