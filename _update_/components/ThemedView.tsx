import { Theme, useTheme } from "@/hooks/useColorScheme";
import React from "react";
import { View, ViewStyle } from "react-native";

interface ThemedViewProps {
  children?: React.ReactNode;
  color?: keyof Theme;
  style?: ViewStyle; // Allow additional styles to be passed
}

const ThemedView = ({
  children,
  color = "background",
  style, // Accept additional styles
}: ThemedViewProps) => {
  const theme = useTheme();

  return (
    <View style={[{ backgroundColor: theme[color] }, style]}>{children}</View>
  );
};

export default ThemedView;
