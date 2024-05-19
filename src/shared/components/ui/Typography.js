import React from "react";
import { StyleSheet, Text } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { useTheme } from "../../stores/themeStore";

const Typography = ({
  children,
  variant = "p",
  color: textColor,
  fontWeight: textWeight,
  style: textStyle,
  onPress,
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

  if (children.length === 0) {
    return;
  }

  return (
    <Text onPress={onPress} style={mergedStyles} {...props}>
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
    lg: { fontSize: RFValue(14) },
    xlg: { fontSize: RFValue(18) },
    md: { fontSize: RFValue(12) },
    sm: { fontSize: RFValue(10) },
    al: { fontSize: RFValue(10.5) },
  };

  return { ...defaultStyles, ...variantStyles[variant] };
};

export default Typography;
