import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { useTheme } from "../../../stores/themeStore";

const PrimaryCard = ({ children, style, onPress }) => {
  const theme = useTheme();
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      style={[
        styles.card,
        {
          backgroundColor: theme.secondary,
          padding: 16,
          borderRadius: 16,
        },
        style,
      ]}>
      {children}
    </TouchableOpacity>
  );
};

export default PrimaryCard;

const styles = StyleSheet.create({
  card: {
    gap: 4,
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowColor: "#000",
    shadowOffset: { height: 2, width: 0 },
    elevation: 3,
  },
});
