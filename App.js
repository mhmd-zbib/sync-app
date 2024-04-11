import React from "react";
import { ThemeProvider } from "./src/stores/ThemeStore"; // make sure to import correctly
import MainStack from "./src/navigation/MainStack";

export default function App() {
  return (
    <ThemeProvider>
      <MainStack />
    </ThemeProvider>
  );
}
