import { useTheme } from "@/hooks/useColorScheme";
import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import ThemedView from "./ThemedView";

const BackButton = () => {
  const theme = useTheme();
  return (
    <ThemedView
      color="secondary"
      style={{
        height: 40,
        width: 40,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 8,
        marginLeft: -15,
      }}
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
