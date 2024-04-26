import React, { createContext, useContext, useState, useEffect } from "react";
import { useColorScheme } from "react-native";
import themes from "../themes/theme";
const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const scheme = useColorScheme();
  const theme = themes[scheme];

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};
