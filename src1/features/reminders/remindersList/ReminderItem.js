import { StyleSheet, Text, View } from "react-native";
import React from "react";
import PrimaryCard from "../../../components/ui/cards/PrimaryCard";
import Typography from "../../../components/ui/text/Typography";
import { useTheme } from "../../../stores/shared/themeStore";
import DateTimeFormatter from "../../../hooks/common/useFormatDate";

const ReminderItem = ({ item, navigation }) => {
  const theme = useTheme();

  return (
    <PrimaryCard
      onPress={() => navigation.navigate("ReminderDetails", { item })}>
      <Typography variant="sm" color={theme.textSecondary}>
        {DateTimeFormatter.formatTimeDayMonth(item.dateTime)}
      </Typography>
      <Typography variant="lg">{item.name}</Typography>
      {item.description ? (
        <Typography color={theme.textSecondary}>{item.description}</Typography>
      ) : null}
    </PrimaryCard>
  );
};

export default ReminderItem;

const styles = StyleSheet.create({});
