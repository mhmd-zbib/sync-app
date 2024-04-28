import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { useTheme } from "../../../stores/themeStore";

const ItemCard = ({ children, style, onPress, variant }) => {
  const theme = useTheme();

  const baseStyle = [
    styles.card,
    style,
    {
      borderRadius: 16,
      borderWidth: variant === "secondary" ? 1 : 0,
      borderColor: variant === "secondary" ? theme.secondary : "transparent",
      backgroundColor:
        variant === "secondary" ? "transparent" : theme.secondary,
      padding: 16,
    },
  ];

  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.8} style={baseStyle}>
      {children}
    </TouchableOpacity>
  );
};

export default ItemCard;

const styles = StyleSheet.create({
  card: {
    // gap: 4,
    shadowOpacity: 0.2,
    shadowRadius: 4,
    // shadowColor: "#000",
    // shadowOffset: { height: 2, width: 0 },
    // elevation: 3,
  },
});
