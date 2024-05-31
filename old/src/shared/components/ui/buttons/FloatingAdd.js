import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useTheme } from "../../../stores/themeStore";
import { AntDesign, Octicons } from "@expo/vector-icons";

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
        width: 50,
        height: 50,
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
        zIndex: 900,
      }}>
      <Octicons name="plus" size={24} color={theme.background} />
    </TouchableOpacity>
  );
};

export default FloatingAdd;

const styles = StyleSheet.create({});
