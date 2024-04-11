import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useTheme } from "../../stores/ThemeStore";
const PrimaryCard = ({ children }) => {
  const theme = useTheme();
  return (
    <View
      style={{
        backgroundColor: theme.secondary,
        padding: 16,
        borderRadius: 16,
        gap: 4,
      }}>
      {children}
    </View>
  );
};

export default PrimaryCard;

const styles = StyleSheet.create({});
