import React, { useState, useEffect } from "react";
import {
  View,
  ActivityIndicator,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { ThemeProvider, useTheme } from "./src/shared/stores/themeStore";
import * as SQLite from "expo-sqlite";
import initDb from "./src/database/init";
import * as SystemUI from "expo-system-ui";
import MainStack from "./src/navigation/MainStack";

export default function App() {
  const [isLoading, setLoading] = useState(true);
  const queryClient = new QueryClient();
  const theme = useTheme();

  useEffect(() => {
    async function setup() {
      try {
        await SystemUI.setBackgroundColorAsync("black");
        await initDb();
      } catch (error) {
        console.error("Error during initial setup:", error);
      } finally {
        setLoading(false);
      }
    }

    setup();
  }, []);

  if (isLoading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="white" />
      </View>
    );
  }

  return (
    <QueryClientProvider client={queryClient}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <ThemeProvider theme={theme}>
          <SafeAreaView style={{ flex: 1 }}>
            <MainStack />
          </SafeAreaView>
        </ThemeProvider>
      </GestureHandlerRootView>
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({
  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
