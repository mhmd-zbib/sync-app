import { Stack, usePathname } from "expo-router";
import "react-native-reanimated";
import BackButton from "@/components/BackButton";
import {
  ThemeProvider as ColorSchemeProvider,
  useTheme,
} from "@/hooks/useColorScheme";
import { DefaultTheme, Theme, ThemeProvider } from "@react-navigation/native";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import * as SystemUI from "expo-system-ui";
import { useEffect } from "react";
import { SafeAreaView, useColorScheme } from "react-native";

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
          <SafeAreaView style={{ flex: 1 }}>
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

  return (
    <Stack
      screenOptions={{
        headerTitleAlign: "center",
        animation: "fade_from_bottom",
        statusBarColor: userTheme.background,
        navigationBarColor: userTheme.background,
        headerTintColor: userTheme.primary,
        headerStyle: { backgroundColor: userTheme.background },
        contentStyle: { backgroundColor: userTheme.background },
        headerLeft: BackButton,
      }}>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen
        name="contact/[id]/index"
        options={{ headerTitle: "Profile" }}
      />
      <Stack.Screen name="group/[id]" options={{ headerTitle: "Group Info" }} />
      <Stack.Screen
        name="reminder/[id]/index"
        options={{ headerTitle: "Reminder Info" }}
      />
      <Stack.Screen
        name="note/[id]/index"
        options={{ headerTitle: "Note Info" }}
      />
      <Stack.Screen
        name="contact/[id]/description/[description]"
        options={{ headerTitle: "Edit Description" }}
      />
      <Stack.Screen
        name="contact/[id]/communication/[communication]"
        options={{ headerTitle: "Edit Contact" }}
      />
      <Stack.Screen
        name="contact/[id]/tags/[tags]"
        options={{ headerTitle: "Edit Tags" }}
      />

      <Stack.Screen name="test" options={{ headerShown: false }} />
    </Stack>
  );
}
