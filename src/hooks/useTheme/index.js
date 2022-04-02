import { useState } from "react";

const LIGHT_MODE = "light-mode";
const DARK_MODE = "dark-mode";

const INITIAL_THEME_STATE = {
  theme: LIGHT_MODE
};

const useTheme = () => {
  const [theme, setTheme] = useState(INITIAL_THEME_STATE.theme);

  const changeTheme = (isDarkMode) => {
    if (isDarkMode) setTheme(LIGHT_MODE);
    else {
      setTheme(DARK_MODE);
    }
  };

  return { theme, changeTheme };
};

export default useTheme;
