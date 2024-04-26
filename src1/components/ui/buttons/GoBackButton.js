import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useTheme } from "../../../stores/shared/themeStore";
import Typography from "../text/Typography";

const GoBackButton = ({ onPress }) => {
  const theme = useTheme();

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={{
        alignSelf: "center",
        backgroundColor: theme.secondary,
        borderRadius: 4,
        alignItems: "center",
        justifyContent: "center",
        width: 32,
        height: 32,
      }}>
      <Text>{"<"}</Text>
    </TouchableOpacity>
  );
};

export default GoBackButton;

const styles = StyleSheet.create({});
