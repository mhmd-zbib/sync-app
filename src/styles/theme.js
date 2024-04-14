const shared = {
  primary: "lightblue",
};

const themes = {
  light: {
    ...shared,
    primary: "white",
    textPrimary: "white",
    textSecondary: "#A3A3A3",
    secondary: "#141414",
    background: "#000000",
  },
  dark: {
    ...shared,
    primary: "white",
    textPrimary: "white",
    textSecondary: "#A3A3A3",
    accent: "#292929",
    subAccent: "#424242",
    secondary: "#141414",
    background: "#000000",
  },
};

export default themes;
