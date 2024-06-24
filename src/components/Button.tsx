import { useTheme } from "@/hooks/useColorScheme";
import React from "react";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import ThemedText from "./ThemedText";

interface ButtonPropsType extends TouchableOpacityProps {
  variant?: "primary" | "secondary";
  title: string;

  rounded?: boolean;
}

const Button = ({
  variant = "primary",
  title,
  rounded = false,
  ...props
}: ButtonPropsType) => {
  const theme = useTheme();
  return (
    <TouchableOpacity
      {...props}
      activeOpacity={0.8}
      style={{
        backgroundColor:
          variant === "primary" ? theme.primary : theme.background,
        paddingHorizontal: 16,
        paddingVertical: 10,
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
