import React, { useContext, useEffect } from "react";
import Header from "./components/Header";
import Characters from "./components/Characters";
import ThemeContext from "./context/ThemeContext";
import useTheme from "./hooks/useTheme";
import "./styles/app.css";
function App() {
  const INITIAL_STATE = useTheme();
  return (
    <ThemeContext.Provider value={INITIAL_STATE}>
      <div className={`app ${INITIAL_STATE.theme}`}>
        <Header />
        <Characters />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
