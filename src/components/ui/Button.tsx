import { useTheme } from "@/hooks/useColorScheme";
import React from "react";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import ThemedText from "./ThemedText";

interface ButtonPropsType extends TouchableOpacityProps {
  variant?: "primary" | "secondary";
  title: string;
  rounded?: boolean;
  size?: "sm" | "md" | "lg";
}

const Button = ({
  variant = "primary",
  title,
  rounded = false,
  size = "md",
  ...props
}: ButtonPropsType) => {
  const theme = useTheme();

  const getPaddingVertical = (): number => {
    switch (size) {
      case "sm":
        return 8;
      case "lg":
        return 20;
      case "md":
      default:
        return 16;
    }
  };

  return (
    <TouchableOpacity
      {...props}
      activeOpacity={0.8}
      style={{
        backgroundColor:
          variant === "primary" ? theme.primary : theme.background,
        paddingHorizontal: 16,
        paddingVertical: getPaddingVertical(),
        borderRadius: rounded ? 800 : 8,
        borderWidth: 1,
        borderColor: variant === "primary" ? theme.primary : theme.subAccent,
        alignItems: "center",
        justifyContent: "center",
      }}>
      <ThemedText variant={variant === "primary" ? "background" : "secondary"}>
        {title}
      </ThemedText>
    </TouchableOpacity>
  );
};

export default Button;
