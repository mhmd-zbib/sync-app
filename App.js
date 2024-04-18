import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import MainStack from "./src/navigation/MainStack";
import { ThemeProvider, useTheme } from "./src/stores/shared/themeStore";
import * as SQLite from "expo-sqlite";
import { useEffect } from "react";
import initDb from "./src/core/database/init";
import * as SystemUI from "expo-system-ui";
import { View } from "react-native";

export default function App() {
  const queryClient = new QueryClient();
  const theme = useTheme();

  useEffect(() => {
    SystemUI.setBackgroundColorAsync("black");

    initDb();
    console.log("Tables are ready");
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <GestureHandlerRootView iew style={{ flex: 1 }}>
        <ThemeProvider>
          {/* <Test /> */}
          <View style={{ flex: 1 }}>
            <MainStack />
          </View>
        </ThemeProvider>
      </GestureHandlerRootView>
    </QueryClientProvider>
  );
}
