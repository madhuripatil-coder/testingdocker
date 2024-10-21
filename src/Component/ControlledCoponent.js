import React, { useState } from "react";

const ControlledCoponent = () => {
  const [val, setVal] = useState("0");

  return (
    <>
      <h1>Controlled Component in React </h1>
      <input
        type="text"
        value={val}
        onChange={(e) => {
          setVal(e.target.value);
        }}
      />
      <h2>value:{val}</h2>
      <hr />
    </>
  );
};

export default ControlledCoponent;
