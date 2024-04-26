import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useTheme } from "../../stores/themeStore";
import Typography from "./Typography";

const Label = ({ label }) => {
  const theme = useTheme();
  return (
    <Typography style={{ color: theme.textSecondary }}>{label}</Typography>
  );
};

export default Label;

const styles = StyleSheet.create({});
