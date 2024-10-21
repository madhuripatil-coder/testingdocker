import React, { useState } from "react";

const HigherOrderCompoent = () => {
  return (
    <>
      <h1>HigherOrderCompoent</h1>
      <br />
      <RedComponent cmp={Counter} />
      <br />
      <GreenComponent cmp={Counter} />
      <br />
      <BlueComponent cmp={Counter} />
      <br />
      <hr />
    </>
  );
};

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Count:{count}</h2>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Update
      </button>
    </div>
  );
}

function RedComponent(props) {
  return (
    <div style={{ backgroundColor: "red", width: 500, marginLeft: 240 }}>
      <h2>Red Counter</h2>
      <props.cmp />
    </div>
  );
}
function GreenComponent(props) {
  return (
    <div style={{ backgroundColor: "green", width: 500, marginLeft: 240 }}>
      <h2>Green Counter</h2>
      <props.cmp />
    </div>
  );
}
function BlueComponent(props) {
  return (
    <div style={{ backgroundColor: "blue", width: 500, marginLeft: 240 }}>
      <h2>Blue Counter</h2>
      <props.cmp />
    </div>
  );
}

export default HigherOrderCompoent;
