import React from "react";
import "./search-styles.css";
const Search = ({ children, ...otherprops }) => {
  return (
    <span className="search">
      <input
        type="search"
        placeholder="city name"
        className="input"
        {...otherprops}
      />
    </span>
  );
};
export default Search;
