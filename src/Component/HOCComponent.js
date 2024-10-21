import React from "react";
import ClickCounter from "./ClickCounter";
import HoverCounter from "./HoverCounter";

const HOCComponent = () => {
  return (
    <div>
      <h1>Hoc Component</h1>
      <ClickCounter />
      <HoverCounter />
    </div>
  );
};

export default HOCComponent;
