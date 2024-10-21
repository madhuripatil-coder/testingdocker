import React from "react";
import withSearch from "./WithSearch";
import { data } from "./Data";

const About = ({ selectedItem }) => {
  return (
    <div>
      <br />
      <h2>About Component</h2>
      <br />

      <h4 style={{ color: "blue" }}>Selected Item: {selectedItem}</h4>
    </div>
  );
};

export default withSearch(About, data);
