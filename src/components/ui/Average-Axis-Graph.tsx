import { View, Text } from "react-native";
import React from "react";
import { useTheme } from "@/hooks/useColorScheme";
import themes from "@/constants/Colors";

const AverageAxisGraph = ({ height }: { height: number }) => {
  const color = useTheme();
  return (
    <View
      style={{
        position: "absolute",
        width: "100%",
        height: 50,
        borderColor: color.accent,
        // borderBottomWidth: 1,
      }}
    />
  );
};

export default AverageAxisGraph;
