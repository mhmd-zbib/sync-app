import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Typography from "../../../../../shared/components/ui/Typography";
import { useTheme } from "../../../../../shared/stores/themeStore";

const EmptySection = ({ onPress }) => {
  const theme = useTheme();

  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <Typography color={theme.textAccent}>Tap to add</Typography>
    </TouchableOpacity>
  );
};

export default EmptySection;

const styles = StyleSheet.create({});
