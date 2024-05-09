import { FlatList, SectionList, StyleSheet, Text, View } from "react-native";
import React from "react";
import ReminderItem from "./ReminderItem";
import SearchBar from "../../../../../shared/components/ui/SearchBar";
import Typography from "../../../../../shared/components/ui/Typography";
import DateTimeFormatter from "../../../../../shared/hooks/useFormatDate";
import { useTheme } from "../../../../../shared/stores/themeStore";

const ReminderList = ({ reminders }) => {
  const theme = useTheme();
  return (
    <SectionList
      ListHeaderComponent={
        <View style={{ gap: 10 }}>
          <Typography variant="xlg" fontWeight={500}>
            Reminders
          </Typography>
          <SearchBar />
        </View>
      }
      contentContainerStyle={{ gap: 10, marginHorizontal: 10 }}
      sections={reminders}
      renderItem={({ item }) => <ReminderItem item={item} />}
      renderSectionHeader={({ section: { title } }) => (
        <View
          style={{
            flexDirection: "row",
            gap: 10,
            alignItems: "center",
            marginBottom: 5,
          }}>
          <Typography color={theme.textSecondary}>
            {DateTimeFormatter.formatMonthYear(title)}
          </Typography>
          <View
            style={{ backgroundColor: theme.accent, width: "100%", height: 1 }}
          />
        </View>
      )}
    />
  );
};

export default ReminderList;

const styles = StyleSheet.create({});
