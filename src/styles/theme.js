const shared = {
  primary: "lightblue",
};

const themes = {
  light: {
    ...shared,
    secondary: "#141414",
    background: "#ffffff",
  },
  dark: {
    ...shared,
    textPrimary: "white",
    textSecondary: "#A3A3A3",
    secondary: "#141414",
    background: "#000000",
  },
};

export default themes;
