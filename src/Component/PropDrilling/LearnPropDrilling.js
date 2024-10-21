import React, { useState } from "react";
import GrandParant from "./GrandParant";

const LearnPropDrilling = () => {
  const [name, setName] = useState("Madhuri");

  return (
    <div>
      <h1>PropDrilling component</h1>
      <GrandParant name={name} />
    </div>
  );
};

export default LearnPropDrilling;
