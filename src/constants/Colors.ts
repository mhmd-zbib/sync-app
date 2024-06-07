const shared = {
  // primary: "lightblue",
};

const themes = {
  light: {
    ...shared,
    primary: "white",
    textPrimary: "white",
    textSecondary: "#A3A3A3",
    secondary: "#141414",
    background: "red",
  },
  dark: {
    ...shared,
    primary: "#ffff",
    textPrimary: "#ffff",
    textSecondary: "#A3A3A3",
    textAccent: "#737373",
    subAccent: "#424242",
    accent: "#292929",
    secondary: "#141414",
    background: "#000000",
  },
};

export default themes;
