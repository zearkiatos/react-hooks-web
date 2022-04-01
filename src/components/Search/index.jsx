import React from "react";
import "./search.css";
const Search = ({ value, placeholder, handleSearch }) => {
  return (
    <div className="search-container">
      <input
        type="text"
        id="search"
        name="search"
        value={value}
        placeholder={placeholder}
        onChange={handleSearch}
      />
    </div>
  );
};

export default Search;
