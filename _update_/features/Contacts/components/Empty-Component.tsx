import { useTheme } from "@/hooks/useColorScheme";
import React from "react";
import { Text } from "react-native";

const EmptyComponent = () => {
  const theme = useTheme();
  return (
    <Text style={{ fontStyle: "italic", color: theme.textAccent }}>
      Tap to add{" "}
    </Text>
  );
};

export default EmptyComponent;
