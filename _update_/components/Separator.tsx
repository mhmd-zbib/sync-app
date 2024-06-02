import { useTheme } from "@/hooks/useColorScheme";
import React from "react";
import { View } from "react-native";

const Separator = () => {
  const theme = useTheme();

  return (
    <View style={{ width: "100%", height: 1, backgroundColor: theme.accent }} />
  );
};

export default Separator;
