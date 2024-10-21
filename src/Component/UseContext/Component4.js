import React, { useContext } from "react";
// import { UserContext } from "./ComponentApp";
import { useSelector } from "react-redux";
//import { UserContext } from "./Component1";

const Component4 = () => {
  //   const user = useContext(UserContext);
  const data = useSelector((state) => state.cartItem.cartData);
  return (
    <div>
      <h1>Component4</h1>
      <h3>Hello {data.name} again!</h3>
      <hr />
    </div>
  );
};

export default Component4;
