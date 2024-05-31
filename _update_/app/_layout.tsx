import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";

import {
  ThemeProvider as ColorSchemeProvider,
  useTheme,
} from "@/hooks/useColorScheme";
import { SafeAreaView, useColorScheme } from "react-native";
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
  Theme,
  ThemeProvider,
} from "@react-navigation/native";
import themes from "@/constants/Colors";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  const colorScheme = useColorScheme();

  const DarkTheme: Theme = {
    dark: true,
    colors: {
      primary: "white",
      background: "rgb(0, 0, 0)",
      card: "rgb(0, 0, 0)",
      text: "rgb(229, 229, 231)",
      border: "rgb(0, 0, 0)",
      notification: "rgb(255, 69, 58)",
    },
  };

  return (
    <ColorSchemeProvider>
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        <SafeAreaView style={{ flex: 1 }}>
          <StackWrapper />
        </SafeAreaView>
      </ThemeProvider>
    </ColorSchemeProvider>
  );
}

function StackWrapper() {
  const userTheme = useTheme();

  return (
    <Stack
      screenOptions={{
        statusBarColor: userTheme.background,
        navigationBarColor: userTheme.background,
        headerTintColor: userTheme.primary,
        headerStyle: { backgroundColor: userTheme.background },
        contentStyle: { backgroundColor: userTheme.background },
      }}>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}
