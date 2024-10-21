import React from "react";
import withSearch from "./WithSearch";
import { data } from "./Data";

const Home = ({ selectedItem }) => {
  return (
    <div>
      <div>
        <br />
        <h2>Home Component</h2>
        <br />
        <h4 style={{ color: "red" }}>Selected Item: {selectedItem}</h4>
      </div>
    </div>
  );
};

export default withSearch(Home, data);
