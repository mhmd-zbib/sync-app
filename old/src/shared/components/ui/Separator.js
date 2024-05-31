import { View, Text } from "react-native";
import React from "react";
import { useTheme } from "../../stores/themeStore";

const Separator = ({ style }) => {
  const theme = useTheme();
  return (
    <View
      style={[
        {
          borderBottomColor: theme.accent,
          borderBottomWidth: 1,
        },
        style,
      ]}
    />
  );
};

export default Separator;
