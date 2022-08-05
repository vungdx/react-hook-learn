import React, { createContext, useState } from "react";
import PropTypes from "prop-types";

const themeContext = createContext();

function ThemeContext({ children }) {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const values = {
    theme,
    toggleTheme,
  };
  return (
    <themeContext.Provider value={values}>{children}</themeContext.Provider>
  );
}

ThemeContext.propTypes = {};

export { ThemeContext, themeContext };
