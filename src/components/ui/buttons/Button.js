import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { useTheme } from "../../../stores/shared/themeStore";
import Typography from "../text/Typography";

const Button = ({
  title,
  onPress,
  variant = "primary",
  disabled = false,
  size = "md",
  style,
}) => {
  const theme = useTheme();

  const baseButtonStyle = StyleSheet.flatten([
    styles.button,
    styles[size],
    variant === "secondary" && {
      backgroundColor: "transparent",
      borderColor: theme.accent,
      borderWidth: 1,
    },
    variant !== "secondary" && { backgroundColor: theme.primary },
    disabled && styles.disabledButton,
    style,
  ]);

  const textColor = getTextColor(theme, variant, disabled);

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      disabled={disabled}
      style={baseButtonStyle}>
      <Typography color={textColor} fontWeight="500" variant="md">
        {title}
      </Typography>
    </TouchableOpacity>
  );
};

function getTextColor(theme, variant, disabled) {
  if (disabled) {
    return theme.disabledText;
  } else if (variant === "secondary") {
    return theme.textSecondary;
  } else {
    return theme.background;
  }
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    borderRadius: 12,
    // paddingHorizontal: 16,
    // paddingVertical: 10,
  },
  sm: {
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  md: {
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  lg: {
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  disabledButton: {
    opacity: 0.15,
  },
});

export default Button;
