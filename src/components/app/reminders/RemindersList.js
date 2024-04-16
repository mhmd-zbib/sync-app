import { FlatList, SectionList, StyleSheet, Text, View } from "react-native";
import React from "react";
import ReminderItem from "./ReminderItem";
import RemindersSection from "./RemindersSection";
import useGroupedSections from "../../../hooks/useGroupedSections";
import { useSort } from "../../../hooks/useSort";

import DateTimeFormatter from "../../../hooks/useFormatDate";
import useSearch from "../../../hooks/useSearch";
import { useReminderSearchStore } from "../../../stores/reminderStore";

const RemindersList = () => {
  const mockData = [
    {
      title: "Reminder 1",
      description: " Stuff to be here",
      dateTime: 1592205987550,
      tags: [1, 2, 3, 4],
    },
    {
      title: "Stuff 1",
      description: " Stuff to be here",
      dateTime: 1593205987550,
      tags: [1, 2, 3, 4],
    },
    {
      title: "House 1",
      description: " Stuff to be here",
      dateTime: 1712923871309,
      tags: [1, 2, 3, 4],
    },
    {
      title: "Car 1",
      description: "Stuff to be hesrses",
      dateTime: 18680000,
      tags: [1, 2, 3, 4],
    },
  ];
  const searchTerm = useReminderSearchStore((state) => state.searchTerm);
  const search = useSearch(mockData, searchTerm, "title", 200);
  const sort = useSort.byDate(search, "dateTime");
  const sections = useGroupedSections(sort, (item) =>
    DateTimeFormatter.formatMonthYear(item.dateTime)
  );

  return (
    <SectionList
      contentContainerStyle={{ gap: 8 }}
      sections={sections}
      renderItem={({ item }) => <ReminderItem item={item} />}
      renderSectionHeader={({ section: { title } }) => (
        <RemindersSection dateTime={title} />
      )}
    />
  );
};

export default RemindersList;

const styles = StyleSheet.create({});
