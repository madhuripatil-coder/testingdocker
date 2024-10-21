import React, { useRef } from "react";

const UseRefExample = () => {
  let inputRef = useRef(null);
  function handleInput() {
    console.log("function called in handleInput");
    inputRef.current.value = "Madhuri";
    inputRef.current.focus();
    inputRef.current.style.color = "red";
  }
  return (
    <>
      <h1>UseRef Hook in React</h1>
      <input type="text" ref={inputRef}></input>
      <button onClick={handleInput}>Handle Input</button>
      <br />
      <br />
      <hr></hr>
    </>
  );
};

export default UseRefExample;
