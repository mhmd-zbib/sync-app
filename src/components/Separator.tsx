import { useTheme } from "@/hooks/useColorScheme";
import React from "react";
import { View } from "react-native";

const Separator = ({ vertical, ...props }: { vertical: boolean }) => {
  const theme = useTheme();

  return (
    <View
      style={{
        width: vertical ? 1 : "100%",
        height: vertical ? "100%" : 1,
        backgroundColor: theme.accent,
        // marginVertical: vertical ? 0 : 16,
        // margin: "auto",
      }}
    />
  );
};

export default Separator;
