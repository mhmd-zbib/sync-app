import { View, Text } from "react-native";
import React from "react";
import { useTheme } from "@/hooks/useColorScheme";

const ProgressBar = ({ progress }: { progress?: number }) => {
  const theme = useTheme();

  return (
    <View
      style={{
        height: 8,
        width: "100%",
        backgroundColor: theme.accent,
        borderRadius: 200,
      }}>
      <View
        style={{
          width: "40%",
          height: 8,
          borderRadius: 200,
          backgroundColor: theme.key,
        }}
      />
    </View>
  );
};

export default ProgressBar;
