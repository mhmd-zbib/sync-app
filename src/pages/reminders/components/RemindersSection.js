import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Typography from "../../../components/Text.js/Typography";
import { useTheme } from "../../../stores/ThemeStore";
import { useFormatMonthYear } from "../../../hooks/useFormatDate";

const RemindersSection = ({ dateTime }) => {
  const theme = useTheme();

  return (
    <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
      <Typography variant="lg" color={theme.textSecondary}>
        {dateTime.toString()}
      </Typography>
      <View style={{ backgroundColor: theme.accent, height: 1, flex: 1 }} />
    </View>
  );
};

export default RemindersSection;

const styles = StyleSheet.create({});
