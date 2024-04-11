import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useTheme } from "../../stores/ThemeStore";
const PrimaryCard = ({ children }) => {
  const theme = useTheme();
  return <View style={{ backgroundColor: theme.primary }}>{children}</View>;
};

export default PrimaryCard;

const styles = StyleSheet.create({});
