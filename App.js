import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import MainStack from "./src/navigation/MainStack";
import { ThemeProvider } from "./src/stores/themeStore";
import * as SQLite from "expo-sqlite";
import { useEffect } from "react";
import initDb from "./src/core/database/Database";

export default function App() {
  const queryClient = new QueryClient();

  useEffect(() => {
    initDb();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <ThemeProvider>
          {/* <Test /> */}
          <MainStack />
        </ThemeProvider>
      </GestureHandlerRootView>
    </QueryClientProvider>
  );
}
