import React from "react";

const Header = ({ handleClick, darkMode }) => {
  return (
    <div className="header">
      <h1>React Hooks 🪝</h1>
      <button type="button" onClick={handleClick}>
        {darkMode ? "Dark Mode 🌚" : "Light Mode 🌝"}
      </button>
    </div>
  );
};

export default Header;
