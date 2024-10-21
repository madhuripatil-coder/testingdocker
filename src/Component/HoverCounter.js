import React, { useState } from "react";
import WithCounter from "./WithCounter";

const HoverCounter = (props) => {
  const { count, incrementcount } = props;
  return (
    <div>
      <h2>Count is:{count}</h2>
      <button onMouseOver={incrementcount}>Hover me</button>
    </div>
  );
};

export default WithCounter(HoverCounter);
