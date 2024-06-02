import { Stack } from "expo-router";
import "react-native-reanimated";

import {
  ThemeProvider as ColorSchemeProvider,
  useTheme,
} from "@/hooks/useColorScheme";
import { DefaultTheme, Theme, ThemeProvider } from "@react-navigation/native";
import { SafeAreaView, TouchableOpacity, useColorScheme } from "react-native";
import * as SystemUI from "expo-system-ui";
import { useEffect } from "react";
import ThemedText from "@/components/ThemedText";
import { Ionicons } from "@expo/vector-icons";
import BackButton from "@/components/BackButton";

// Prevent the splash screen from auto-hiding before asset loading is complete.
// SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  // const [loaded] = useFonts({
  //   SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  // });

  // useEffect(() => {
  //   if (loaded) {
  //     SplashScreen.hideAsync();
  //   }
  // }, [loaded]);

  // if (!loaded) {
  //   return null;
  // }

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
  useEffect(() => {
    SystemUI.setBackgroundColorAsync(userTheme.background);
    console.log("hisss");
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
      <Stack.Screen name="contact" options={{ headerTitle: "Profile" }} />
      <Stack.Screen name="test" options={{ headerShown: false }} />
    </Stack>
  );
}
