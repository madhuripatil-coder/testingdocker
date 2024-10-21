import React from "react";
import withSearch from "./WithSearch";
import { data } from "./Data";

const Services = ({ selectedItem }) => {
  return (
    <div>
      <br />
      <h2>Service Component</h2>
      <br />
      <h4 style={{ color: "orange" }}>Selected Item: {selectedItem}</h4>
    </div>
  );
};

export default withSearch(Services, data);
