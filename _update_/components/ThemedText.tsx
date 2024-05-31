import React from "react";
import { useTheme } from "@/hooks/useColorScheme";
import { Text, TextStyle } from "react-native";
// import { RFValue } from "react-native-responsive-fontsize";

type ThemedTextProps = {
  children: React.ReactNode;
  size?: number | string;
  variant?: "primary" | "secondary" | "accent" | "background";
};

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
  size = 14, // Default font size
  variant = "primary",
}: ThemedTextProps) => {
  const theme = useTheme();

  const textColor = colorMap[variant] || "textPrimary";

  const textStyle: TextStyle = {
    fontSize: typeof size === "string" ? parseFloat(size) : size,
    color: theme[textColor],
  };

  return <Text style={textStyle}>{children}</Text>;
};

export default ThemedText;
