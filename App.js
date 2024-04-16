import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import MainStack from "./src/navigation/MainStack";
import { ThemeProvider } from "./src/stores/shared/themeStore";
import * as SQLite from "expo-sqlite";
import { useEffect } from "react";
import initDb from "./src/core/database/init";
import { View } from "react-native";

export default function App() {
  const queryClient = new QueryClient();

  useEffect(() => {
    initDb();
    console.log("Tables are ready");
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <GestureHandlerRootView iew style={{ flex: 1 }}>
        <ThemeProvider>
          {/* <Test /> */}

          <MainStack />
        </ThemeProvider>
      </GestureHandlerRootView>
    </QueryClientProvider>
  );
}
