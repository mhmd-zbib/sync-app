import { useTheme } from "@/hooks/useColorScheme";
import { Link } from "expo-router";
import React from "react";
import { TouchableOpacity, ViewStyle } from "react-native";

interface CardProps {
  children: React.ReactNode;
  href: string;
  style?: ViewStyle;
}

const Card = ({ children, href, style }: CardProps) => {
  const theme = useTheme();

  return (
    <Link asChild href={href}>
      <TouchableOpacity
        activeOpacity={0.7}
        style={{
          backgroundColor: theme.secondary,
          padding: 18,
          borderRadius: 15,
          display: "flex",
          flexDirection: "column",
          ...style,
        }}>
        {children}
      </TouchableOpacity>
    </Link>
  );
};

export default Card;
