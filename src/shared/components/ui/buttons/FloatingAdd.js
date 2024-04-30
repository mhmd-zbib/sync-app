import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useTheme } from "../../../stores/themeStore";

const FloatingAdd = ({ onPress }) => {
  const theme = useTheme();

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      style={{
        backgroundColor: theme.primary,
        position: "absolute",
        right: 20,
        bottom: 45,
        width: 55,
        height: 55,
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
        zIndex: 900,
      }}>
      <Text>+</Text>
    </TouchableOpacity>
  );
};

export default FloatingAdd;

const styles = StyleSheet.create({});
