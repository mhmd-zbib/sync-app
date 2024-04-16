import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { useTheme } from "../../../stores/shared/themeStore";
import Typography from "../../ui/text/Typography";

const AddButton = ({ title, icon, onPress }) => {
  const theme = useTheme();

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      style={{
        flex: 1,
        alignItems: "center",
        gap: 8,
        backgroundColor: theme.accent,
        borderRadius: 16,
        paddingVertical: 16,
      }}>
      <Typography variant="sm">{title}</Typography>
    </TouchableOpacity>
  );
};

export default AddButton;

const styles = StyleSheet.create({});
