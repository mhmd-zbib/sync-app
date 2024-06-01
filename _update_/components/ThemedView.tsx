import { Theme, useTheme } from "@/hooks/useColorScheme";
import React from "react";
import { View, ViewProps } from "react-native";

interface ThemedViewProps extends ViewProps {
  children?: React.ReactNode;
  color?: keyof Theme;
}

const ThemedView = ({
  children,
  color = "background",
  style,
  ...props
}: ThemedViewProps) => {
  const theme = useTheme();

  return (
    <View style={[{ backgroundColor: theme[color] }, style]} {...props}>
      {children}
    </View>
  );
};

export default ThemedView;
