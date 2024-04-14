import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { useTheme } from "../../../stores/ThemeStore";
import Typography from "../../../components/Text.js/Typography";

const IconCont = ({ icon }) => {
  const theme = useTheme();
  return (
    <View
      style={{
        width: 48,
        height: 48,
        backgroundColor: theme.subAccent,
        borderRadius: 500,
      }}></View>
  );
};

const AddButton = ({ title, icon }) => {
  const theme = useTheme();

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={{
        flex: 1,
        alignItems: "center",
        gap: 8,
        backgroundColor: theme.accent,
        borderRadius: 16,
        paddingVertical: 16,
      }}>
      <IconCont icon={icon} />

      <Typography variant="sm">{title}</Typography>
    </TouchableOpacity>
  );
};

export default AddButton;

const styles = StyleSheet.create({});
