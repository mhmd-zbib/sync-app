import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { useTheme } from "../../../stores/themeStore";
import Typography from "../Typography";
import { MaterialIcons } from "@expo/vector-icons";

const Button = ({
  title,
  onPress,
  variant = "primary",
  disabled = false,
  size = "md",
  style,
  rounded = false,
  arrow = false,
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
    variant === "accent" && {
      backgroundColor: theme.secondary,
    },
    variant === "primary" && {
      backgroundColor: theme.primary,
    },
    disabled && styles.disabledButton,
    rounded && { borderRadius: styles[size].paddingVertical * 2 },
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
      {arrow && (
        <MaterialIcons
          name="arrow-forward-ios"
          size={16}
          color={theme.background}
        />
      )}
    </TouchableOpacity>
  );
};

function getTextColor(theme, variant, disabled) {
  if (disabled) {
    return theme.disabledText;
  } else if (variant === "secondary" || variant === "accent") {
    return theme.textSecondary;
  } else {
    return theme.background;
  }
}

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 4,
    alignItems: "center",
    borderRadius: 12,
  },

  xsm: {
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 6,
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
