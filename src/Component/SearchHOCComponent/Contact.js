import React from "react";
import withSearch from "./WithSearch";
import { data } from "./Data";

const Contact = ({ selectedItem }) => {
  return (
    <div>
      <br />
      <h2>Contact Component</h2>
      <br />
      <h4 style={{ color: "green" }}>Selected Item: {selectedItem}</h4>
    </div>
  );
};

export default withSearch(Contact, data);
