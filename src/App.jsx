import React, { useState } from "react";
import Header from "./components/Header";
import Characters from "./components/Characters";
import "./styles/app.css";
function App() {
  const [darkMode, setDarkMode] = useState(false);

  const handleClick = () => setDarkMode(!darkMode);
  return (
    <div className={`app ${darkMode ? "dark-mode" : ""}`}>
      <Header handleClick={handleClick} darkMode={darkMode} />
      <Characters />
    </div>
  );
}

export default App;
