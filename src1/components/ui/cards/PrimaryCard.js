/**
 * Main primary card
 */

import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { useTheme } from "../../../stores/shared/themeStore";

const PrimaryCard = ({ children, style, onPress }) => {
  const theme = useTheme();
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      style={[
        styles.card, // Apply default styles first
        {
          backgroundColor: theme.secondary, // Override with theme and custom properties
          padding: 16,
          borderRadius: 16,
        },
        style, // Apply external styles last to allow overrides
      ]}>
      {children}
    </TouchableOpacity>
  );
};

export default PrimaryCard;

const styles = StyleSheet.create({
  card: {
    // Default styles for the card
    gap: 4, // Note: 'gap' property might not work as expected in React Native
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowColor: "#000",
    shadowOffset: { height: 2, width: 0 },
    elevation: 3, // For Android shadow
  },
});
