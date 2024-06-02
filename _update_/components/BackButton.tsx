import { Ionicons } from "@expo/vector-icons";
import React from "react";
import ThemedView from "./ThemedView";
import { useTheme } from "@/hooks/useColorScheme";
import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";

const BackButton = () => {
  const theme = useTheme();
  return (
    <ThemedView
      color="secondary"
      style={{ padding: 8, borderRadius: 8 }}
      onPress={() => {
        router.back();
      }}>
      <MaterialIcons
        name="arrow-back-ios-new"
        size={18}
        color={theme.textAccent}
      />
    </ThemedView>
  );
};

export default BackButton;
