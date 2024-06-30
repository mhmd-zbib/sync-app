import { useTheme } from "@/hooks/useColorScheme";
import React from "react";
import { ActivityIndicator, View } from "react-native";

const Loading = () => {
  const theme = useTheme();
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}>
      <ActivityIndicator color={theme.accent} size={"large"} />
    </View>
  );
};

export default Loading;
