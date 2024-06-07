import React from "react";
import { useTheme } from "@/hooks/useColorScheme";
import { Text, TextStyle, TextProps } from "react-native";
// import { RFValue } from "react-native-responsive-fontsize";

interface ThemedTextProps extends TextProps {
  children: React.ReactNode;
  size?: number | string;
  variant?: "primary" | "secondary" | "accent" | "background";
  style?: TextStyle;
}

type Theme = {
  textPrimary: string;
  textSecondary: string;
  textAccent: string;
  background: string;
};

const colorMap: Record<string, keyof Theme> = {
  primary: "textPrimary",
  secondary: "textSecondary",
  accent: "textAccent",
  background: "background",
};

const ThemedText = ({
  children,
  size = 14,
  variant = "primary",
  style,
  ...props
}: ThemedTextProps) => {
  const theme = useTheme();

  const textColor = colorMap[variant] || "textPrimary";

  const textStyle: TextStyle = {
    fontSize: typeof size === "string" ? parseFloat(size) : size,
    color: theme[textColor],
  };

  return (
    <Text {...props} style={[textStyle, style]}>
      {children}
    </Text>
  );
};

export default ThemedText;
