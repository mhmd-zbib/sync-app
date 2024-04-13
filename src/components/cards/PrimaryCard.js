/**
 * Main primary card
 */

import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { useTheme } from "../../stores/ThemeStore";
const PrimaryCard = ({ children }) => {
  const theme = useTheme();
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={{
        backgroundColor: theme.secondary,
        padding: 16,
        borderRadius: 16,
        gap: 4,
      }}>
      {children}
    </TouchableOpacity>
  );
};

export default PrimaryCard;

const styles = StyleSheet.create({});
