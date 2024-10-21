import React, { useState, useRef, useEffect } from "react";

const withSearch = (WrappedComponent, data) => {
  return function WithSearchComponent(props) {
    const [searchTerm, setSearchTerm] = useState("");
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);
    const [inputWidth, setInputWidth] = useState("auto");
    const [selectedItem, setSelectedItem] = useState(null);

    const handleChange = (event) => {
      setSearchTerm(event.target.value);
      setIsDropdownVisible(true);
    };

    const handleItemClick = (item) => {
      setSelectedItem(item);
      setIsDropdownVisible(false);
      setSearchTerm("");
    };

    const filteredData = data
      .filter((item) => item.toLowerCase().includes(searchTerm.toLowerCase()))
      .sort();

    return (
      <div style={{ position: "relative", display: "inline-block" }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <input
            type="text"
            placeholder="Enter search term..."
            onFocus={() => setIsDropdownVisible(true)}
            onBlur={() => setTimeout(() => setIsDropdownVisible(false), 200)}
            onChange={handleChange}
            value={searchTerm}
            // value={selectedItem}
            width={"700"}
            style={{
              cursor: "text",
              border: "1px solid #ccc",
              padding: "5px 10px",
              flex: "1",
              boxSizing: "border-box",
            }}
          />
          <span style={{ marginLeft: "5px" }}>SearchHere</span>
        </div>

        {isDropdownVisible && filteredData.length > 0 && (
          <ul
            style={{
              position: "absolute",
              border: "1px solid #ccc",
              width: "68%",

              zIndex: 1,
              background: "#fff",
              maxHeight: "150px",
              overflowY: "auto",
              listStyleType: "none",
              padding: 0,
              alignContent: "center",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            {filteredData.map((item, index) => (
              <li
                key={index}
                onClick={() => handleItemClick(item)}
                style={{ cursor: "pointer", padding: "5px" }}
              >
                {item}
              </li>
            ))}
          </ul>
        )}
        <WrappedComponent {...props} selectedItem={selectedItem} />
      </div>
    );
  };
};

export default withSearch;
