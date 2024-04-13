import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { useTheme } from "../../stores/ThemeStore";
import Typography from "../Text.js/Typography";

const Button = ({
  title,
  onPress,
  variant = "primary",
  disabled = false,
  style,
}) => {
  const theme = useTheme();

  // Adjusted for border only on secondary variant
  const baseButtonStyle = [
    styles.button,
    variant === "secondary"
      ? {
          backgroundColor: "transparent",
          borderColor: theme.accent, // assuming 'accent' is a defined color in the theme
          borderWidth: 1,
        }
      : { backgroundColor: theme.primary },
    disabled && styles.disabledButton,
    style, // Apply custom style passed as prop
  ];

  const textColor = getTextColor(theme, variant, disabled);

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      disabled={disabled}
      style={baseButtonStyle} // Use the combined styles
    >
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
    return theme.background; // ensure this is the correct color intended for the text
  }
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 500,
    paddingVertical: 10,
    paddingHorizontal: 16,
    alignItems: "center",
  },
  disabledButton: {
    opacity: 0.5,
  },
});

export default Button;
