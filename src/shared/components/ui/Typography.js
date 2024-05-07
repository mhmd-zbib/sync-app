import React from "react";
import { Text, StyleSheet } from "react-native";
import { useTheme } from "../../stores/themeStore";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

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
    p: { fontSize: RFValue(12) },
    lg: { fontSize: RFValue(12) },
    xlg: { fontSize: RFValue(18) },
    md: { fontSize: RFValue(12) },
    sm: { fontSize: RFValue(10) },
    al: { fontSize: RFValue(12) },
  };

  return { ...defaultStyles, ...variantStyles[variant] };
};

export default Typography;
