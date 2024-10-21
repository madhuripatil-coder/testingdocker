import { React, memo } from "react";

const ChildA = (Learning, count) => {
  console.log("child Component");
  return <></>;
};

export default memo(ChildA);
