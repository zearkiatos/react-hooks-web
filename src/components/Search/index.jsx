import React from "react";
import "./search.css";
const Search = ({ value, placeholder, searchInput, handleSearch }) => {
  return (
    <div className="search-container">
      <input
        type="text"
        id="search"
        name="search"
        value={value}
        placeholder={placeholder}
        ref={searchInput}
        onChange={handleSearch}
      />
    </div>
  );
};

export default Search;
