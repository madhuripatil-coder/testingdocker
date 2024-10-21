import React from "react";
import Parent from "./Parent";

const GrandParant = (props) => {
  const { name } = props;
  return (
    <div>
      <h1>GrandParant component</h1>
      <Parent name={name} />
    </div>
  );
};

export default GrandParant;
