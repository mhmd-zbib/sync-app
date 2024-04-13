import { StyleSheet, Text, View } from "react-native";
import React from "react";
import PrimaryCard from "../../../components/cards/PrimaryCard";
import Typography from "../../../components/Text.js/Typography";
import { useTheme } from "../../../stores/ThemeStore";
import {
  useFormatMonthYear,
  useFormatTimeDayMonth,
} from "../../../hooks/useFormatDate";

const ReminderItem = ({ item }) => {
  const theme = useTheme();

  return (
    <PrimaryCard>
      <Typography variant="md" color={theme.textSecondary}>
        {useFormatTimeDayMonth(item.dateTime)}
      </Typography>
      <Typography variant="lg">{item.title}</Typography>
      {item.description ? (
        <Typography color={theme.textSecondary}>{item.description}</Typography>
      ) : null}
    </PrimaryCard>
  );
};

export default ReminderItem;

const styles = StyleSheet.create({});
