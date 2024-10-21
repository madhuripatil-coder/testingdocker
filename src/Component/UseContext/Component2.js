import React from "react";
import Component3 from "./Component3";
import { useSelector } from "react-redux";

const Component2 = () => {
  const data = useSelector((state) => state);
  console.log("redux data is", data);
  return (
    <div>
      <h1>Component 2</h1>
      <h3>Name:{data.cartItem.cartData.name}</h3>
      <h3>Age:{data.cartItem.cartData.age}</h3>
      <Component3 />
    </div>
  );
};

export default Component2;
