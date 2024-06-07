import React, { createContext, useContext, ReactNode } from "react";
import { useColorScheme } from "react-native";
import themes from "@/constants/Colors";

export interface Theme {
  primary: string;
  textPrimary: string;
  textSecondary: string;
  textAccent?: string;
  accent?: string;
  subAccent?: string;
  secondary: string;
  background: string;
  key?: string;
}

const ThemeContext = createContext<Theme | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const scheme = useColorScheme();
  const theme = themes[scheme || "light"];

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};
