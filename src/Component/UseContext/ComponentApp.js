import React, { createContext, useState } from "react";
import Component2 from "./Component2";
import { useDispatch } from "react-redux";
import { addToCart } from "../Redux/Action";
export const UserContext = createContext();
const ComponentApp = () => {
  //   const [user, setUser] = useState("Madhuri");
  const dispatch = useDispatch();
  const dispatchHandler = () => {
    dispatch(addToCart({ name: "Madhuri", age: "27" }));
  };
  return (
    <div>
      <h1>Component 1</h1>
      {/* <h3>Hello,{user}</h3> */}
      {/* <UserContext.Provider value={user}> */}
      <button onClick={dispatchHandler}>Dispatch data</button>
      <Component2 />
      {/* </UserContext.Provider> */}
    </div>
  );
};

export default ComponentApp;
