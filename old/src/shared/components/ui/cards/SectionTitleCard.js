import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useTheme } from "../../../stores/themeStore";
import Typography from "../Typography";

const SectionTitleCard = ({ title }) => {
  const theme = useTheme();
  return (
    <Typography
      color={theme.textSecondary}
      style={{
        backgroundColor: theme.secondary,
        borderRadius: 5,
        padding: 5,
        paddingHorizontal: 10,
      }}>
      {title}
    </Typography>
  );
};

export default SectionTitleCard;

const styles = StyleSheet.create({});
