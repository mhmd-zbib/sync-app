/**
 * ThemedView Component
 *
 * ThemedView is a component that renders a view with a background color based on the current theme.
 * It uses the useTheme hook from the useColorScheme module to dynamically apply the theme color.
 *
 * @param children - React node to be rendered inside the ThemedView.
 * @param color - Optional. The key of the color in the theme to be applied as the background color. Default is "background".
 * @param style - Optional. Additional styles to be applied to the ThemedView.
 * @param props - Additional props to be spread to the underlying TouchableOpacity component.
 *
 * Example usage:
 * ```=
 * <ThemedView color="primary" style={{ flex: 1 }}>
 *   {Children components here...}
 * </ThemedView>
 * ```
 *
 * @returns A TouchableOpacity component with a background color based on the current theme.
 */

import { Theme, useTheme } from "@/hooks/useColorScheme";
import React from "react";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";

interface ThemedViewProps extends TouchableOpacityProps {
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
    <TouchableOpacity
      activeOpacity={0.8}
      style={[{ backgroundColor: theme[color] }, style]}
      {...props}>
      {children}
    </TouchableOpacity>
  );
};

export default ThemedView;
