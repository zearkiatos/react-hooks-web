import React, { useContext, useState } from "react";
import ThemeContext from '../../context/ThemeContext';

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);
  const { changeTheme } = useContext(ThemeContext);

  const handleClick = () => {
    changeTheme(darkMode);
    setDarkMode(!darkMode);
  }
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
