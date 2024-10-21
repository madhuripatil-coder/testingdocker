import React from "react";
import WithCounter from "./WithCounter";

const ClickCounter = (props) => {
  const { count, incrementcount } = props;
  return (
    <div>
      <h2>Count is:{count}</h2>
      <button onClick={incrementcount}>Click Me</button>
    </div>
  );
};

export default WithCounter(ClickCounter);
