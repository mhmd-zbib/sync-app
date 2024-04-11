import React from "react";
import { Text, StyleSheet } from "react-native";
import { useTheme } from "../../stores/ThemeStore";

const Typography = ({
  children,
  variant = "p",
  color: textColor,
  fontWeight: textWeight,
  style: textStyle,
  ...props
}) => {
  const theme = useTheme();
  const { color, fontSize, fontWeight } = getTypographyStyles(theme, variant);

  const mergedStyles = StyleSheet.flatten([
    {
      color: textColor || color,
      fontSize,
      fontWeight: textWeight || fontWeight,
    },
    textStyle,
  ]);

  return (
    <Text style={mergedStyles} {...props}>
      {children}
    </Text>
  );
};

const getTypographyStyles = (theme, variant) => {
  const defaultStyles = {
    color: theme.textPrimary,
    fontSize: 14,
    fontWeight: "normal",
  };

  const variantStyles = {
    p: { fontSize: 14 },
    lg: { fontSize: 16 },
    md: { fontSize: 14 },
    sm: { fontSize: 12 },
    al: { fontSize: 14 },
  };

  return { ...defaultStyles, ...variantStyles[variant] };
};

export default Typography;
