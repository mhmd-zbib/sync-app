import React from "react";
import { ThemeProvider } from "./src/stores/ThemeStore"; // make sure to import correctly
import MainStack from "./src/navigation/MainStack";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <MainStack />
      </ThemeProvider>
    </QueryClientProvider>
  );
}
