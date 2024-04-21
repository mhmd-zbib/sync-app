import { FlatList, SectionList, StyleSheet, Text, View } from "react-native";
import React from "react";
import ReminderItem from "./ReminderItem";
import RemindersSection from "./RemindersSection";
import useGroupedSections from "../../../hooks/common/useGroupedSections";
import { useSort } from "../../../hooks/common/useSort";
import DateTimeFormatter from "../../../hooks/common/useFormatDate";
import useSearch from "../../../hooks/common/useSearch";
import { useReminderSearchStore } from "../../../stores/reminders/useReminderSearchStore";
import EmptyList from "../EmptyList";
import { useRemindersListQuery } from "../../../queries/reminders/useRemindersListQuery";
import { useNavigation } from "@react-navigation/native";

const RemindersList = () => {
  const navigation = useNavigation();
  const { data: reminders, isLoading, isError } = useRemindersListQuery();
  const searchTerm = useReminderSearchStore((state) => state.searchTerm);
  const search = useSearch(reminders, searchTerm, "name", 200);
  const sort = useSort.byDate(search, "dateTime");
  const sections = useGroupedSections(sort, (item) =>
    DateTimeFormatter.formatMonthYear(item.dateTime)
  );

  return (
    <SectionList
      ListEmptyComponent={<EmptyList title={"reminders"} />}
      contentContainerStyle={{ gap: 8, marginHorizontal: 10 }}
      sections={sections}
      style={{ flex: 1 }}
      renderItem={({ item }) => (
        <ReminderItem item={item} navigation={navigation} />
      )}
      renderSectionHeader={({ section: { title } }) => (
        <RemindersSection dateTime={title} />
      )}
    />
  );
};

export default RemindersList;

const styles = StyleSheet.create({});
