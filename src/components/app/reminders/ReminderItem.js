import { StyleSheet, Text, View } from "react-native";
import React from "react";
import PrimaryCard from "../../ui/cards/PrimaryCard";
import Typography from "../../ui/text/Typography";
import { useTheme } from "../../../stores/shared/themeStore";
import DateTimeFormatter from "../../../hooks/common/useFormatDate";

const ReminderItem = ({ item }) => {
  const theme = useTheme();

  return (
    <PrimaryCard>
      <Typography variant="sm" color={theme.textSecondary}>
        {DateTimeFormatter.formatTimeDayMonth(item.dateTime)}
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
