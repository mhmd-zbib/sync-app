import BackButton from "@/components/ui/BackButton";
import NavHeader from "@/components/ui/NavHeader";
import {
  ThemeProvider as ColorSchemeProvider,
  useTheme,
} from "@/hooks/useColorScheme";
import { DefaultTheme, Theme, ThemeProvider } from "@react-navigation/native";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Stack, usePathname } from "expo-router";
import * as SystemUI from "expo-system-ui";
import { useEffect } from "react";
import { SafeAreaView, useColorScheme } from "react-native";
import "react-native-reanimated";

// Prevent the splash screen from auto-hiding before asset loading is complete.
// SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const queryClient = new QueryClient();

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
    <QueryClientProvider client={queryClient}>
      <ColorSchemeProvider>
        <ThemeProvider
          value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
          <SafeAreaView style={{ flex: 1, paddingHorizontal: 10 }}>
            <StackWrapper />
          </SafeAreaView>
        </ThemeProvider>
      </ColorSchemeProvider>
    </QueryClientProvider>
  );
}

function StackWrapper() {
  const userTheme = useTheme();
  const path = usePathname();
  useEffect(() => {
    SystemUI.setBackgroundColorAsync(userTheme.background);
  }, []);

  console.log(path);

  return (
    <Stack
      screenOptions={{
        headerTitleAlign: "center",
        animation: "fade_from_bottom",
        statusBarColor: userTheme.background,
        navigationBarColor: userTheme.background,
        headerTintColor: userTheme.primary,
        contentStyle: { backgroundColor: userTheme.background },
        headerStyle: { backgroundColor: userTheme.background },
        headerLeft: BackButton,
      }}>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="test" options={{ headerShown: false }} />
    </Stack>
  );
}
