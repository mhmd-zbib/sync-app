import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import MainStack from "./src/navigation/MainStack";
import { ThemeProvider } from "./src/stores/ThemeStore";
import * as SQLite from "expo-sqlite";
import { useEffect } from "react";
const queryClient = new QueryClient();

export default function App() {
  const db = SQLite.openDatabase("example.db");

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
